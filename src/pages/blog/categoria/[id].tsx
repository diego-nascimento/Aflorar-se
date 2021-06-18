import React from "react";
import Layout from '../../../Components/Layout/base/Base'
import BlogBase from '../../../Components/Blog/Base/Index'
import {Wrapper} from '../../../PageStyles/Blog.style'
import { IPost } from "../../../interfaces/IPost";
import { GetStaticProps } from "next";
import { GetFactory } from "../../../Factory/http/GetFactory";
import { ITag } from "../../../interfaces/Itag";
import { ICategoria } from "../../../interfaces/ICategoria";

interface IBlog{
  Posts: Array<IPost>
  Destaques: Array<IPost>
  Tags: Array<ITag>
  Categoria: ICategoria
  Categorias: Array<ICategoria>
}

const Blog:React.FC<IBlog> = ({Posts, Destaques, Categoria, Categorias}) =>{

  return(
    <Layout>
      <Wrapper>
        <h1>{Categoria.name}</h1>
        <BlogBase Posts={Posts} DestaquesData={Destaques} FullOrNot={false} Categorias={Categorias}/>
      </Wrapper>
    </Layout>
  )
}

export default Blog


export async function getStaticPaths() {
  const api = GetFactory()

  const response = await api.handle({
    url: `${process.env.APIURL}/categoria-blogs`,
    body: null
  })

  const params: { params: { id: string } }[] = []
  response.body.forEach((element:ICategoria) => {
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

export const getStaticProps: GetStaticProps = async ({params}:any) => {
  const Get = GetFactory()
  const responsePosts = await Get.handle({
    url: `/posts?categoria_blog.id=${params.id}`,
    body: null
  })

  const ResponseDestaques = await Get.handle({
    url: '/posts?destaque=true',
    body: null
  })

  const ResponseTags = await Get.handle({
    url: '/tags',
    body: null
  })

  const ResponseActualCategoria = await Get.handle({
    url: `/categoria-blogs/${params.id}`,
    body: null
  })

  const Posts = responsePosts.body.map((post:any):IPost => {
    return({
      id: post.id,
      destaque: post.destaque? true: false,
      text: post.text,
      title: post.title,
      url: post.image[0].url || undefined,
      author: `${post.admin_user.firstname} ${post.admin_user.lastname}`
    })
  })

  const Destaques = ResponseDestaques.body.map((post:any):IPost => {
    return({
      id: post.id,
      destaque: post.destaque? true: false,
      text: post.text,
      title: post.title,
      url: post.image[0].url || undefined,
      author: `${post.admin_user.firstname} ${post.admin_user.lastname}`
    })
  })

  const Tags = ResponseTags.body.map((tag: ITag):ITag =>{
    return{
      id: tag.id,
      name: tag.name
    }
  })

  const ResponseCategorias = await Get.handle({
    url: '/categoria-blogs',
    body: null
  })


  const ActualCategoria:ICategoria = {
    id: ResponseActualCategoria.body.id,
    name: ResponseActualCategoria.body.name
  }

  const Categorias = ResponseCategorias.body.map((categoria: ICategoria):ICategoria =>{
    return{
      id: categoria.id,
      name: categoria.name
    }
  })

  return{
    props:{
      Posts: Posts,
      Destaques:  Destaques,
      Tags: Tags,
      Categorias: Categorias,
      Categoria: ActualCategoria
    }
  }
}

