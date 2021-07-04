import React from 'react'
import { Wrapper } from './BlogBase.style'
import Listing from '../Listing/Listing'
import Destaques from '../Destaques/Destaques'
import { IPost } from '../../../interfaces/IPost'
import { ICategoria } from '../../../interfaces/ICategoria'

interface IBlogBase {
  Posts: Array<IPost>
  DestaquesData: Array<IPost>
  FullOrNot: boolean
  Categorias: Array<ICategoria>
  CategoriaSelected?: ICategoria | null
}

const BlogBase: React.FC<IBlogBase> = ({ DestaquesData, Posts, FullOrNot, Categorias, CategoriaSelected }) => {
  return (
    <Wrapper className='Container'>
      <Listing Posts={Posts} FullOrNot={FullOrNot} Categorias={Categorias} CategoriaSelected={CategoriaSelected || null}/>
      <Destaques Data={DestaquesData}/>
    </Wrapper>
  )
}

export default BlogBase
