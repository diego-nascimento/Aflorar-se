import { IGetInfra, IGetEntry } from '../../Data/Protocols/IGetInfra ';
import { HttpResponse } from '../../Domain/Protocols/httpHelpers';
import { api } from './AxiosApi'

export class GetInfra implements IGetInfra{
  async Get({ body, url }: IGetEntry): Promise<HttpResponse>{
    try {
      const response = await api.get(url, body)
      switch (response.status) {
        case 200:
          return {
            statusCode: 200,
            body: response.data
          }
        case 400:
        case 404:
          return {
            statusCode: response.status,
            body: 'Não Encontrado'
          }
      }
      
      return {
        statusCode: response.status,
        body: response.data
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Algo deu Errado, Tente mais tarde'
      }
    }
  }
}