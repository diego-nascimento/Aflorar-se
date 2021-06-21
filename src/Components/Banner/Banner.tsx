import React from 'react'
import { Carousel } from 'react-bootstrap';
import {Container} from './Banner.style'



export interface TypeBanner {
  url: string
  title: string
}

 interface IBanner {
  banners: Array<TypeBanner>
}



const Banner : React.FC<IBanner> = ({banners}) =>{

  return(
    <Container>
      <Carousel
        controls={false}
        touch={true}
        indicators={false}
        slide={true}
        interval={3000} 
      >         
        {
          banners && banners.map((banner, index) => {
            return <Carousel.Item  key={index}>
              <a style={{width: '100%', cursor: 'default'}}>
               <img src={banner.url} alt={banner.title} />
              </a>
            </Carousel.Item>   
          })
        }       
           
    </Carousel>
  </Container>
  )
}

export default Banner