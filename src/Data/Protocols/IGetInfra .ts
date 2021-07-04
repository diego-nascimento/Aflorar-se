import { HttpResponse } from '../../Domain/Protocols/httpHelpers'

export interface IGetInfra{
  Get(httpRequest: IGetEntry):Promise<HttpResponse>
}

export interface IGetEntry{
  body: any
  url: string
}
