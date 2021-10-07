import React from 'react'
import Link from 'next/link'
import { Wrapper, PostList, Post, ImageContainer, Title, TextContainer, TextResumed, Responsable } from './Listing.style'
import marked from 'marked'
import { IPost } from '../../../interfaces/IPost'
import { ICategoria } from '../../../interfaces/ICategoria'
import CategoryList from '../../CategoryList/CategoryList'
import MobileListCategoria from './MobileListCategoria'

interface IListing{
  Posts: Array<IPost>
  FullOrNot: boolean
  Categorias: Array<ICategoria>
  CategoriaSelected: ICategoria | null
}

const Listing : React.FC<IListing> = ({ Posts, FullOrNot, Categorias, CategoriaSelected }) => {
  const RenderPost = (PostData:IPost) => {
    return (
      <Link href={`/post/${PostData.id}?val=${PostData.title}`} key={PostData.id}>
        <a>
          <Post >
            <ImageContainer>
              <img src={PostData.url} alt={PostData.title} />
            </ImageContainer>
            <TextContainer>
              <Title>{PostData.title}</Title>
              <TextResumed dangerouslySetInnerHTML={{ __html: marked(PostData.text) }} />
            </TextContainer>
          </Post>
        </a>
      </Link>
    )
  }

  return (
    <Wrapper>
      <MobileListCategoria categorias={Categorias}/>
      <CategoryList Categorias={Categorias} CategoriaSelected={CategoriaSelected}/>
      <PostList>
        {Posts && Posts.map((PostData:IPost, index: number) => {
          if (FullOrNot) {
            return (
              RenderPost(PostData)
            )
          } else {
            if (index < 5) {
              return (
                RenderPost(PostData)
              )
            }
          }
        })}
      </PostList>
      {
        FullOrNot
          ? <Link href='/blog'>
            <a style={{ display: 'flex', justifyContent: 'center', color: '#111', fontSize: '1.2rem' }}> Ver Mais...</a>
          </Link>
          : null
      }
    </Wrapper>
  )
}

export default Listing
