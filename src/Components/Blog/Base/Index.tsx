import React from 'react'
import {Wrapper, } from './BlogBase.style'
import Listing from '../Listing/Listing'
import Destaques from '../Destaques/Destaques'
import { IPost } from '../../../interfaces/IPost'
import { ITag } from '../../../interfaces/Itag'
import { ICategoria } from '../../../interfaces/ICategoria'

interface IBlogBase {
  Posts: Array<IPost>
  DestaquesData: Array<IPost>
  FullOrNot: boolean
  Categorias: Array<ICategoria>
}

const BlogBase: React.FC<IBlogBase> = ({DestaquesData, Posts, FullOrNot, Categorias}) =>{
  return(
    <Wrapper className='Container'>
      <Listing Posts={Posts} FullOrNot={FullOrNot} Categorias={Categorias}/>
      <Destaques Data={DestaquesData}/>
    </Wrapper>
  )
}

export default BlogBase