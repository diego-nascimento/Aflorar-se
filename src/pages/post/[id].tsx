import marked from 'marked'
import { GetStaticProps } from 'next'
import React from 'react'
import LayoutBase from '../../Components/Layout/base/Base'
import { GetFactory } from '../../Factory/http/GetFactory'
import { IPost } from '../../interfaces/IPost'
import {Wrapper,ImageContainer, HeaderContainer, Title, Content, TagList, Tag} from '../../PageStyles/Post.style'
import {Responsable} from '../../Components/Blog/Listing/Listing.style'
import { ITag } from '../../interfaces/Itag'
import Link from 'next/link'
import { ICategoria } from '../../interfaces/ICategoria'
import {CategoriaList, Categoria} from '../../styles/globalStyles'

interface IPostPage{
  Post: IPost
  Categorias: Array<ICategoria>
}

const Post : React.FC<IPostPage> = ({Post, Categorias}) =>{
  return(
      Post && Categorias?
      (<LayoutBase>
      <Wrapper className='Container'>
      <CategoriaList>
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
        <ImageContainer>
          {Post.url && <img src={Post.url} alt={Post.title} />}
        </ImageContainer>
        <HeaderContainer>
        <Title>
          {Post.title}
        </Title>
        <Responsable>Publicado por {Post.author}</Responsable>
        </HeaderContainer>
        <Content dangerouslySetInnerHTML={{ __html: marked(Post.text) }} />
        <TagList>
          <span style={{marginRight: '10px'}}>Tags:</span>
        {Post.tags && Post.tags.map((tag: ITag) =>{
          return(
            <Link href={`/blog/tag/${tag.id}?tag=${tag.name}`}>
              <a>
                <Tag key={tag.id}> 
                  <span>#{tag.name}</span>
                </Tag>
              </a>
            </Link> 
          )
        })}
      </TagList>
      </Wrapper>
    </LayoutBase>
    )
    : null
  )
}
 

export default Post

export async function getStaticPaths() {
  const api = GetFactory()

  const response = await api.handle({
    url: `${process.env.APIURL}/posts`,
    body: null
  })

  const params: { params: { id: string } }[] = []
  response.body.forEach((element:IPost) => {
    params.push({
      params: {
        id: element.id,
      },
    });
  });
  return {
    paths: params,
    fallback: true,
  };
}


export const getStaticProps: GetStaticProps = async ({params}: any) => {
  const Get = GetFactory()
  const responsePosts = await Get.handle({
    url: `/posts/${params.id}`,
    body: null
  })

  const ResponseCategorias = await Get.handle({
    url: '/categoria-blogs',
    body: null
  })

  const post = responsePosts.body

  const Post: IPost = {
    id: post.id,
    destaque: post.destaque? true: false,
    text: post.text,
    title: post.title,
    url: post.image[0].url || undefined,
    author: `${post.admin_user.firstname} ${post.admin_user.lastname}`,
    tags: post.tags
  }

  const Categorias = ResponseCategorias.body.map((categoria: ICategoria):ICategoria =>{
    return{
      id: categoria.id,
      name: categoria.name
    }
  })
    
  return{
    props:{
      Post: Post,
      Categorias: Categorias
    }
  }
}

