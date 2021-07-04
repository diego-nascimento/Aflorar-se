import styled from 'styled-components'

interface IWrapper{
  MenuState: boolean
}

export const Wrapper = styled.nav<IWrapper>`
  width: 300px;
  max-width: 80%;
  display: none;
  position: fixed;
  top:0px;
  left: 0px;
  background: white;
  height: 100vh;
  transform: ${props => props.MenuState ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: .5s;
  border: 1px solid rgba(0,0,0, .3);
  z-index: 98;

  @media(max-width: 800px){
    display: flex;
  }
`

export const Background = styled.div<IWrapper>`
  z-index: 50;
  width: 100vw;
  height: 100vh;
  display: ${props => props.MenuState ? 'block' : 'none'};
  background-color: rgba(0,0,0, .5);
  position: fixed;
  top: 0px;
  left: 0px;
`
export const ListaMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const Item = styled.li`
  width: 100%;
  border: 1px solid rgba(0,0,0, .2);

  
  a{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    padding: 20px 20px;
    color: #111;
  }

`
