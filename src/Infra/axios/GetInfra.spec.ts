import { GetInfra } from './GetInfra'
import axios from 'axios'
import faker from 'faker'
import { IGetEntry, IGetInfra } from '../../Data/Protocols/IGetInfra '

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): IGetInfra => {
  return new GetInfra()
}

const makeRequest = ():IGetEntry => {
  return {
    url: faker.internet.url(),
    body: faker.random.objectElement()
  }
}

describe('Get-Infra', () => {
  test('Should call axios with correct params', async () => {
    const sut = makeSut()
    const params = makeRequest()
    await sut.Get(params)
    expect(mockedAxios.get).toHaveBeenCalledWith(params.url, params.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const request = makeRequest()
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ status: 200, data: 'any_value' }))
    const response = await sut.Get(request)
    expect(response).toEqual({ statusCode: 200, body: 'any_value' })
  })

  test('Should return statusCode 400 if axios return 400', async () => {
    const sut = makeSut()
    const request = makeRequest()
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ status: 400, data: 'any_value' }))
    const response = await sut.Get(request)
    expect(response).toEqual({ statusCode: 400, body: 'any_value' })
  })

  test('Should return statusCode 500 if axios throws', async () => {
    const sut = makeSut()
    const request = makeRequest()
    mockedAxios.get.mockImplementationOnce(() => { throw new Error('Error') })
    const response = await sut.Get(request)
    expect(response).toEqual({ statusCode: 500, body: 'Algo deu errado. Tente novamente mais tarde!' })
  })
})
