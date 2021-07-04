import { HttpRequest, HttpResponse } from '../../Domain/Protocols/httpHelpers'
import { IGetInfra } from '../Protocols/IGetInfra '
import { GetData } from './Get-Data'
import faker from 'faker'

class httpGetter implements IGetInfra {
  async Get (httpRequest: HttpRequest):Promise<HttpResponse> {
    return Promise.resolve({
      statusCode: 200,
      body: httpRequest
    })
  }
}

const makeSut = () => {
  const httpGetterMocked = new httpGetter()
  const sut = new GetData(httpGetterMocked)
  return { sut, httpGetterMocked }
}

describe('Get-Data', () => {
  test('Should return statusCode 400 if httpGetter return 400', async () => {
    const { sut, httpGetterMocked } = makeSut()
    jest.spyOn(httpGetterMocked, 'Get').mockReturnValueOnce(Promise.resolve({ statusCode: 400, body: null }))
    const params:HttpRequest = {
      body: null,
      url: faker.internet.url()
    }
    const response = await sut.handle(params)
    expect(response).toEqual({ statusCode: 400, body: 'Algo deu errado, tente Novamente Mais tarde' })
  })

  test('Should return statusCode 500 if httpGetter return 400', async () => {
    const { sut, httpGetterMocked } = makeSut()
    jest.spyOn(httpGetterMocked, 'Get').mockReturnValueOnce(Promise.resolve({ statusCode: 500, body: null }))
    const params:HttpRequest = {
      body: null,
      url: faker.internet.url()
    }
    const response = await sut.handle(params)
    expect(response).toEqual({ statusCode: 500, body: 'Algo deu errado, tente Novamente Mais tarde' })
  })

  test('Should return statusCode 500 if httpGetter return 404', async () => {
    const { sut, httpGetterMocked } = makeSut()
    jest.spyOn(httpGetterMocked, 'Get').mockReturnValueOnce(Promise.resolve({ statusCode: 404, body: null }))
    const params:HttpRequest = {
      body: null,
      url: faker.internet.url()
    }
    const response = await sut.handle(params)
    expect(response).toEqual({ statusCode: 404, body: 'Algo deu errado, tente Novamente Mais tarde' })
  })

  test('Should return statusCode 200 and body if httpGetter return 200.', async () => {
    const { sut, httpGetterMocked } = makeSut()
    const params:HttpRequest = {
      body: faker.random.objectElement(),
      url: faker.internet.url()
    }

    const responseMocked = { statusCode: 200, body: params.body }
    jest.spyOn(httpGetterMocked, 'Get').mockReturnValueOnce(Promise.resolve(responseMocked))
    const response = await sut.handle(params)
    expect(response).toEqual(responseMocked)
  })
})
