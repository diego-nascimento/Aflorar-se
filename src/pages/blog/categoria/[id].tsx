import React from 'react'
import Layout from '../../../Components/Layout/base/Base'
import BlogBase from '../../../Components/Blog/Base/Index'
import { Wrapper } from '../../../PageStyles/Blog.style'
import { IPost } from '../../../interfaces/IPost'
import { GetStaticProps } from 'next'
import { GetFactory } from '../../../Factory/http/GetFactory'
import { ITag } from '../../../interfaces/Itag'
import { ICategoria } from '../../../interfaces/ICategoria'

interface IBlog{
  Posts: Array<IPost>
  Destaques: Array<IPost>
  Tags: Array<ITag>
  Categoria: ICategoria
  Categorias: Array<ICategoria>
}

const Blog:React.FC<IBlog> = ({ Posts, Destaques, Categoria, Categorias }) => {
  return (
    Posts && Destaques && Categorias && Categoria
      ? <Layout>
      <Wrapper>
        <h1>{Categoria.name}</h1>
        <BlogBase Posts={Posts} DestaquesData={Destaques} FullOrNot={false} Categorias={Categorias} CategoriaSelected={Categoria}/>
      </Wrapper>
    </Layout>
      : null
  )
}

export default Blog

export async function getStaticPaths () {
  const api = GetFactory()

  const response = await api.handle({
    url: `${process.env.APIURL}/categoria-blogs`,
    body: null
  })

  const params: { params: { id: string } }[] = []
  response.body.forEach((element:ICategoria) => {
    params.push({
      params: {
        id: element.id
      }
    })
  })
  return {
    paths: params,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }:any) => {
  const Get = GetFactory()
  const responsePosts = await Get.handle({
    url: `${process.env.APIURL}/posts?categoria_blog.id=${params.id}`,
    body: null
  })

  const ResponseDestaques = await Get.handle({
    url: `${process.env.APIURL}/posts?destaque=true`,
    body: null
  })

  const ResponseTags = await Get.handle({
    url: `${process.env.APIURL}/tags`,
    body: null
  })

  const ResponseActualCategoria = await Get.handle({
    url: `${process.env.APIURL}/categoria-blogs/${params.id}`,
    body: null
  })

  const ResponseCategorias = await Get.handle({
    url: `${process.env.APIURL}/categoria-blogs`,
    body: null
  })

  const Posts = responsePosts.body.map((post:any):IPost => {
    return ({
      id: post.id,
      destaque: !!post.destaque,
      text: post.text,
      title: post.title,
      url: post.image.length > 0 ? post.image[0].url : null
    })
  })

  const Destaques = ResponseDestaques.body.map((post:any):IPost => {
    return ({
      id: post.id,
      destaque: !!post.destaque,
      text: post.text,
      title: post.title,
      url: post.image.length > 0 ? post.image[0].url : null
    })
  })

  const Tags = ResponseTags.body.map((tag: ITag):ITag => {
    return {
      id: tag.id,
      name: tag.name
    }
  })

  const ActualCategoria:ICategoria = {
    id: ResponseActualCategoria.body.id,
    name: ResponseActualCategoria.body.name
  }

  const Categorias = ResponseCategorias.body.map((categoria: ICategoria):ICategoria => {
    return {
      id: categoria.id,
      name: categoria.name
    }
  })

  return {
    props: {
      Posts: Posts,
      Destaques: Destaques,
      Tags: Tags,
      Categorias: Categorias,
      Categoria: ActualCategoria
    }
  }
}
