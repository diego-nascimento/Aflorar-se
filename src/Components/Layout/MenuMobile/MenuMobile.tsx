import React from 'react'
import {Wrapper, ListaMenu, Item} from './MenuMobile.style'
import {MenuContext} from '../../../Contexts/MenuContexts'
import Link from 'next/link'

const MenuMobile: React.FC = () =>{
  const {MenuState, setMenuState} = React.useContext(MenuContext)

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