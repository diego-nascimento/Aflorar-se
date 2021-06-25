import React from 'react'
import {Wrapper, ListaMenu, Item} from './MenuMobile.style'
import {useMenu} from '../../../Contexts/MenuContexts'
import Link from 'next/link'

const MenuMobile: React.FC = () =>{
  const {MenuState, setMenuState} = useMenu()

  const checkResize = () =>{
    window.addEventListener('resize', () =>{
      setMenuState(false)
    })
  }

  React.useEffect(() =>{
    checkResize()
  })

  return(
    <Wrapper MenuState={MenuState}>
      <ListaMenu>
        <Item onClick={ () => setMenuState(false)}>
          <Link href="http://www.libidoss.com.br">
            <a target='blank'>
              Loja
            </a>
          </Link>
        </Item>
        <Item onClick={ () => setMenuState(false)}>
          <Link href="/sobre">
            <a>
              Sobre nós
            </a>
          </Link>
        </Item>
        <Item onClick={ () => setMenuState(false)}>
          <Link href="/blog">
            <a>
              Blog
            </a>
          </Link>
        </Item>
        <Item onClick={ () => setMenuState(false)}>
          <Link href="http://www.google.com.br">
            <a target='blank'>
              E-book
            </a>
          </Link>
        </Item>
      </ListaMenu>
    </Wrapper>
  )
}

export default MenuMobile