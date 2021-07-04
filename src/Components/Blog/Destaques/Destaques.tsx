import React from 'react'
import { IPost } from '../../../interfaces/IPost'
import { Wrapper, ListItems, Item, ImageContainer, Title } from './Destaques.style'
import Link from 'next/link'

interface IDestaques{
  Data: Array<IPost>
}

const Destaques : React.FC<IDestaques> = ({ Data }) => {
  return (
    <Wrapper>
      <h3>Destaques que você pode gostar</h3>
      <ListItems>
        {Data && Data.map((Post:IPost) => {
          return (
            <Link href={`/post/${Post.id}?val=${Post.title}`} key={Post.id}>
              <a>
                <Item >
                  <ImageContainer url={Post.url}/>
                  <Title>
                    {Post.title}
                  </Title>
                </Item>
              </a>
            </Link>

          )
        })}

      </ListItems>

    </Wrapper>
  )
}

export default Destaques
