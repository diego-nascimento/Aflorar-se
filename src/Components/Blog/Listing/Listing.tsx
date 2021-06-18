import React from 'react' 
import Link from 'next/link'
import {Wrapper, PostList, Post, ImageContainer, Title, TextContainer, TextResumed, Responsable} from './Listing.style'
import marked from 'marked'
import {CategoriaList, Categoria } from '../../../styles/globalStyles'


import { IPost } from '../../../interfaces/IPost'
import { ITag } from '../../../interfaces/Itag'
import { ICategoria } from '../../../interfaces/ICategoria'


interface IListing{
  Posts: Array<IPost>
  FullOrNot: boolean
  Categorias: Array<ICategoria>
}

const Listing : React.FC<IListing> = ({Posts, FullOrNot, Categorias}) =>{

  const RenderPost = (PostData:IPost) =>{
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
                <Responsable className='Author'>
                  <p>Por {PostData.author}</p>
                </Responsable>
            </TextContainer>  
          </Post>
        </a>
      </Link>
    )
  }
  
  return(
    <Wrapper>
      <CategoriaList>
      <Link href={`/blog`}>
              <a>
                <Categoria> 
                  <span>Inicio</span>
                </Categoria>
              </a>
            </Link> 
        {Categorias && Categorias.map((categoria: ICategoria) =>{
          return(
            <Link href={`/blog/categoria/${categoria.id}?categoria=${categoria.name}`} key={categoria.id}>
              <a>
                <Categoria> 
                  <span>{categoria.name}</span>
                </Categoria>
              </a>
            </Link> 
          )
        })}
      </CategoriaList>
      <PostList>
        {Posts && Posts.map( (PostData:IPost, index: number) =>{
           if(FullOrNot){
            return(
              RenderPost(PostData)
            )
          }else{
            if(index < 5){ 
              return(
                RenderPost(PostData)
              )
            }
          }
        })}
      </PostList>
      {
        FullOrNot ?
          <Link href='/blog'>
            <a style={{display: 'flex', justifyContent: 'center', color: '#111', fontSize: '1.2rem'}}> Ver Mais...</a>
          </Link>: 
          null
      } 
    </Wrapper>
  )
}

export default Listing
