export interface IMember{
  id: string,
  name: string,
  text: string,
  facebook: string,
  whatsapp: string,
  instagram: string,
  twitter: string,
  photo: IPhoto,
}

interface IPhoto{
  id: string,
  url: string
}