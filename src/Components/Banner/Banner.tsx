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
        interval={5000}
      >         
        {
          banners && banners.map(banner => {
            return <Carousel.Item >
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