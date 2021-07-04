import React from 'react'
import { Container } from './Base.style'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const layoutBase: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </ Container>
  )
}

export default layoutBase
