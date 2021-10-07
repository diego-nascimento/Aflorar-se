import { ITag } from './Itag'

export interface IPost{
  id: string,
  title: string,
  text: string,
  url: string,
  destaque: boolean,
  tags?: Array<ITag>
  published_at?: string
}
