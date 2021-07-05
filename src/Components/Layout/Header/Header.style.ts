import styled from 'styled-components'
import { styles } from '../../../styles/theme.styles'

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${styles.ComponentBGDark};
  color: ${styles.fontColorLight};
`

interface IContainer{
  MenuState: boolean
}

export const Container = styled.div<IContainer>`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  svg{
    width: 30px;
    height: 30px;
    display: none;
    z-index: 99;
    transition: .5s;

    @media(max-width: 800px){
      display: flex;  
      position: ${props => props.MenuState === true ? 'fixed' : 'block'};
      color: ${props => props.MenuState === true ? 'black' : 'white'};
    }
  }

  @media(max-width: 800px){
    justify-content: space-between;
  }
`

export const Logo = styled.h2`
  letter-spacing: .3rem;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
`

export const Navegation = styled.nav`
  display: flex;
  justify-content: space-around;

  a{
    padding: 20px 10px;
    min-width: 100px;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
      background: rgba(0,0,0, .2);
    }
  }

  @media(max-width: 800px){
    display: none;
  }
`
