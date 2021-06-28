import React from 'react'
import { ICategoria } from '../../../interfaces/ICategoria'
import {ContainerMobile, CategoriaOptions, CategoriaOption} from './Listing.style'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {useRouter} from 'next/router'

interface IMobileListCategoria {
  categorias: Array<ICategoria>
}


const MobileListCategoria:React.FC<IMobileListCategoria> = ({categorias}) =>{
  const [categoriaSelected, setCategoriaSelected] = React.useState<ICategoria>(categorias[0])
  const [activated, setActivated] = React.useState<boolean>(false)
  const Router = useRouter()

  return (
    <ContainerMobile onClick={() => setActivated(!activated)} active={activated}>
      <p>Selecione a categoria aqui</p>
      <AiOutlineArrowUp />
      <CategoriaOptions active={activated}>
        <CategoriaOption key={0} onClick={() => {
          setCategoriaSelected({ id: '0', name: 'Inicio'})
          Router.push('/blog')}
        } >
          <span>Inicio</span>
        </CategoriaOption>
        {categorias && categorias.map((categoria, index) =>{
          return (
            <CategoriaOption key={index + 1} onClick={() => {
              setCategoriaSelected(categoria)
              Router.push(`/blog/categoria/${categoria.id}?val=${categoria.name}`)}
            }>
              <span>{categoria.name}</span>
            </CategoriaOption>
          )
        })}
      </CategoriaOptions>
    </ContainerMobile>
  )
}

export default MobileListCategoria