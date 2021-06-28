import React from 'react'
import {Wrapper, Container} from '../Footer/Footer.style'

const Footer : React.FC = () =>{
  return(
    <Wrapper >
      <Container className='Container'>
        <b>Aflorar-se - Todos os direitos reservados</b>
      </Container>
    </Wrapper>  
  )
}

export default Footer;