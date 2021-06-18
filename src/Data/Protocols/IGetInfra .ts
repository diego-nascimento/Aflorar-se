import { HttpRequest, HttpResponse } from "../../Domain/Protocols/httpHelpers";

export interface IGetInfra{
  Get(httpRequest: HttpRequest):Promise<HttpResponse>
}

export interface IGetEntry{
  body: any
  url: string
}