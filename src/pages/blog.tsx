import React from "react";
import Layout from '../Components/Layout/base/Base'
import BlogBase from '../Components/Blog/Base/Index'
import {Wrapper} from '../PageStyles/Blog.style'
import { IPost } from "../interfaces/IPost";
import { GetStaticProps } from "next";
import { GetFactory } from "../Factory/http/GetFactory";
import { ITag } from "../interfaces/Itag";
import { ICategoria } from "../interfaces/ICategoria";

interface IBlog{
  Posts: Array<IPost>
  Destaques: Array<IPost>
  Categorias: Array<ICategoria>
}

const Blog:React.FC<IBlog> = ({Posts, Destaques, Categorias}) =>{
  return(
    <Layout>
      <Wrapper>
        <h1>Blog</h1>
        <BlogBase Posts={Posts} DestaquesData={Destaques} FullOrNot={false} Categorias={Categorias}/>
      </Wrapper>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async (context) => {
  const Get = GetFactory()
  const responsePosts = await Get.handle({
    url: '/posts',
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
      Categorias: Categorias
    }
  }
}

