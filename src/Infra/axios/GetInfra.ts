
import { IGetInfra, IGetEntry } from '../../Data/Protocols/IGetInfra '
import axios from 'axios'
import { HttpResponse } from '../../Domain/Protocols/httpHelpers'

export class GetInfra implements IGetInfra {
  async Get (httpRequest: IGetEntry):Promise<HttpResponse> {
    const url = httpRequest.url
    try {
      const response = await axios.get(url, httpRequest.body)
      const data:HttpResponse = {
        statusCode: response.status,
        body: response.data
      }
      return data
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Algo deu errado. Tente novamente mais tarde!'
      }
    }
  }
}
