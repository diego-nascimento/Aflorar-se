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
  Tag: ITag
  Categorias: Array<ICategoria>
}

const BlogTag:React.FC<IBlog> = ({Posts, Destaques, Tag, Categorias}) =>{
  return(
    <Layout>
      <Wrapper>
        <h1>#{Tag.name}</h1>
        <BlogBase Posts={Posts} DestaquesData={Destaques} FullOrNot={false} Categorias={Categorias}/>
      </Wrapper>
    </Layout>
  )
}

export default BlogTag


export async function getStaticPaths() {
  const api = GetFactory()

  const response = await api.handle({
    url: `${process.env.APIURL}/tags`,
    body: null
  })

  const params: { params: { id: string } }[] = []
  response.body.forEach((element:ITag) => {
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
    url: `/posts?tags.id=${params.id}`,
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

  const ResponseCategorias = await Get.handle({
    url: '/categoria-blogs',
    body: null
  })

  const Posts = responsePosts.body.map((post:any):IPost => {
    return({
      id: post.id,
      destaque: post.destaque? true: false,
      text: post.text,
      title: post.title,
      url: post.image[0].url,
      author: `${post.admin_user.firstname} ${post.admin_user.lastname}`
    })
  })

  const Destaques = ResponseDestaques.body.map((post:any):IPost => {
    return({
      id: post.id,
      destaque: post.destaque? true: false,
      text: post.text,
      title: post.title,
      url: post.image[0].url,
      author: `${post.admin_user.firstname} ${post.admin_user.lastname}`
    })
  })

  const ActualTag = ResponseTags.body.map((tag: ITag):ITag =>{
    return{
      id: tag.id,
      name: tag.name
    }
  })

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
      Tag: ActualTag[0],
      Categorias: Categorias
    }
  }
}

