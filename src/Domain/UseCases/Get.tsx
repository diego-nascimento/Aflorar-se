import { HttpRequest, HttpResponse } from '../Protocols/httpHelpers'

export interface IGet{
  handle(httpRequest: HttpRequest):Promise<HttpResponse>
}
