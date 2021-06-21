import { IGetInfra, IGetEntry } from '../../Data/Protocols/IGetInfra ';
import { HttpResponse } from '../../Domain/Protocols/httpHelpers';
import { api } from './AxiosApi'

export class GetInfra implements IGetInfra{
  async Get({ body, url }: IGetEntry): Promise<HttpResponse>{
    try {
      const response = await api.get(url, body)
      return {
        statusCode: response.status, 
        body: response.data
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: null
      }
    }
  }
}