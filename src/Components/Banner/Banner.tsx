import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Container } from './Banner.style'
import Link from 'next/link'

export interface TypeBanner {
  url: string
  title: string
  link?: string
}

 interface IBanner {
  banners: Array<TypeBanner>
}

const Banner : React.FC<IBanner> = ({ banners }) => {
  return (
    <Container>
      <Carousel
        controls={true}
        touch={true}
        indicators={false}
        slide={true}
        interval={5000}
      >
        {
          banners && banners.map((banner, index) => {
            return banner.link !== undefined
              ? <Carousel.Item key={index}>
              <Link href={banner.link}>
                <a style={{ width: '100%', cursor: 'pointer' }} target='blank'>
                  <img src={banner.url} alt={banner.title} />
                </a>
              </Link>
            </Carousel.Item>
              : <Carousel.Item key={index}>
              <a style={{ width: '100%', cursor: 'default' }}>
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
