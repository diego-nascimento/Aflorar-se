import React from 'react'
import { Carousel } from 'react-bootstrap';
import {Container} from './Banner.style'

interface IBanner{
  url: string
  title: string
}

const Banner : React.FC<IBanner> = ({url, title}) =>{
  return(
    <Container>
      <Carousel
        controls={false}
        touch={true}
        indicators={false}
        slide={true}
        interval={5000}
      >                
        <Carousel.Item >
            <a style={{width: '100%', cursor: 'default'}}>
              <img src={url} alt={title} />
            </a>
        </Carousel.Item>       
    </Carousel>
  </Container>
  )
}

export default Banner