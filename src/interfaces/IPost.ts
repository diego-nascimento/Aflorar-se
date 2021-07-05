import { ITag } from './Itag'

export interface IPost{
  id: string,
  title: string,
  text: string,
  url: string,
  destaque: boolean,
  author: string
  tags?: Array<ITag>
  published_at?: string
}
