import React from 'react'
import { Wrapper, Container, Logo, Navegation } from './Header.style'
import Link from 'next/link'
import MenuMobile from '../MenuMobile/MenuMobile'
import { FiMenu } from 'react-icons/fi'
import { useMenu } from '../../../Contexts/MenuContexts'

const Header: React.FC = () => {
  const { MenuState, setMenuState } = useMenu()

  return (
    <Wrapper>
      <Container className='Container' MenuState={MenuState}>
        <FiMenu onClick={() => setMenuState(!MenuState)}/>
        <MenuMobile />
        <Link href="/">
          <a>
            <Logo>Aflorar-se</Logo>
          </a>
        </Link>

        <Navegation>
          <Link href="http://www.libidoss.com.br" >
            <a target='blank'>
              Loja
            </a>
          </Link>
          <Link href='/sobre' >
            <a>
              Sobre nós
            </a>
          </Link>
          <Link href="/blog" >
            <a>
              Blog
            </a>
          </Link>
          <Link href="http://www.google.com.br">
            <a target='blank'>
              Ebook
            </a>
          </Link>
        </Navegation>
      </Container>
    </Wrapper>

  )
}

export default Header
