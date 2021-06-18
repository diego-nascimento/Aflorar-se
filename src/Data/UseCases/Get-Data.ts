import { HttpRequest, HttpResponse } from '../../Domain/Protocols/httpHelpers';
import {IGet} from '../../Domain/UseCases/Get'
import { IGetInfra } from '../Protocols/IGetInfra ';


export class GetData implements IGet{
  private readonly GetInfra: IGetInfra

  constructor(GetInfra: IGetInfra){
    this.GetInfra = GetInfra
  }
  async handle(httpRequest: HttpRequest):Promise<HttpResponse>{
    return await this.GetInfra.Get(httpRequest)
  }
}