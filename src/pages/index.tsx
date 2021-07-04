import React from 'react'
import { GetStaticProps } from 'next'
import LayoutBase from '../Components/Layout/base/Base'
import Banner, { TypeBanner } from '../Components/Banner/Banner'
import BlogBase from '../Components/Blog/Base/Index'
import { GetFactory } from '../Factory/http/GetFactory'
import { IPost } from '../interfaces/IPost'
import { ITag } from '../interfaces/Itag'
import { ICategoria } from '../interfaces/ICategoria'

interface IHome{
  Posts: Array<IPost>
  Destaques: Array<IPost>
  Categorias: Array<ICategoria>
}

const Banners: Array<TypeBanner> = [
  {
    url: '/banner1.jpg',
    title: 'Aflorar-se'
  },
  {
    url: '/banner2.jpg',
    title: 'Equipe Responsavel'
  },
  {
    url: '/banner3.jpg',
    title: 'Libido LoveShop',
    link: 'https://www.libidoss.com.br'
  }
]
const Home: React.FC<IHome> = ({ Posts, Destaques, Categorias }) => (
  <LayoutBase>
    <Banner banners={Banners} />
    <BlogBase Posts={Posts} DestaquesData={Destaques} FullOrNot Categorias={Categorias} CategoriaSelected={null} />
  </LayoutBase>
)

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const Get = GetFactory()

  const responsePosts = await Get.handle({
    url: `${process.env.APIURL}/posts`,
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

  const ResponseCategorias = await Get.handle({
    url: `${process.env.APIURL}/categoria-blogs`,
    body: null
  })

  const Posts = responsePosts.body.map((post:any):IPost => ({
    id: post.id,
    destaque: !!post.destaque,
    text: post.text,
    title: post.title,
    url: post.image[0].url,
    author: `${post.admin_user.firstname} ${post.admin_user.lastname}`
  }))

  const Destaques = ResponseDestaques.body.map((post:any):IPost => ({
    id: post.id,
    destaque: !!post.destaque,
    text: post.text,
    title: post.title,
    url: post.image[0].url,
    author: `${post.admin_user.firstname} ${post.admin_user.lastname}`
  }))

  const Tags = ResponseTags.body.map((tag: ITag):ITag => ({
    id: tag.id,
    name: tag.name
  }))

  const Categorias = ResponseCategorias.body.map((categoria: ICategoria):ICategoria => ({
    id: categoria.id,
    name: categoria.name
  }))

  return {
    props: {
      Posts,
      Destaques,
      Tags,
      Categorias
    }
  }
}
