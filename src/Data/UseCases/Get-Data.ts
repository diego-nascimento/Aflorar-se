import { HttpRequest, HttpResponse } from '../../Domain/Protocols/httpHelpers'
import { IGet } from '../../Domain/UseCases/Get'
import { IGetInfra } from '../Protocols/IGetInfra '

export class GetData implements IGet {
  private readonly GetInfra: IGetInfra

  constructor (GetInfra: IGetInfra) {
    this.GetInfra = GetInfra
  }

  async handle (httpRequest: HttpRequest):Promise<HttpResponse> {
    const response = await this.GetInfra.Get(httpRequest)
    switch (response.statusCode) {
      case 200:
        return {
          statusCode: 200,
          body: response.body
        }
      default:
        return {
          statusCode: response.statusCode,
          body: 'Algo deu errado, tente Novamente Mais tarde'
        }
    }
  }
}
