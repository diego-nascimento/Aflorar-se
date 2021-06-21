import LayoutBase from '../Components/Layout/base/Base'
import Banner from '../Components/Banner/Banner'
import BlogBase from '../Components/Blog/Base/Index'
import { GetStaticProps} from 'next'
import {GetFactory} from '../Factory/http/GetFactory'
import { IPost } from '../interfaces/IPost'
import {ITag} from '../interfaces/Itag'
import { ICategoria } from '../interfaces/ICategoria'
import {TypeBanner} from '../Components/Banner/Banner'


interface IHome{
  Posts: Array<IPost>
  Destaques: Array<IPost>
  Categorias: Array<ICategoria>
}

const Banners: Array<TypeBanner> = [
  {
    url: '/banner1.jpg',
    title: 'Equipe Responsavel'
  },
  {
    url: '/banner2.jpg',
    title: 'Aflorar-se'
  },

]
const  Home: React.FC<IHome> = ({Posts, Destaques, Categorias}) => {
  return (
   <LayoutBase>
     <Banner  banners={Banners} />
     <BlogBase Posts={Posts} DestaquesData={Destaques} FullOrNot={true} Categorias={Categorias} CategoriaSelected={null}/>
   </LayoutBase>
  )
}

export default Home

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

  const Tags = ResponseTags.body.map((tag: ITag):ITag =>{
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
      Tags: Tags,
      Categorias: Categorias
    }
  }
}

