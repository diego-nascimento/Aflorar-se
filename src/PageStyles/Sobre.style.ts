
import styled from 'styled-components'

export const WrapperProjeto = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;

  @media(max-width: 800px){
    padding: 0px 20px;
  }
`

export const LogoContainer = styled.div`

  img{
    width: 100%;
  }
`

export const WrapperMembers = styled.section`
  margin-top: 30px;

  h1{
    text-align: center;
    padding: 0 20px;
  }

  @media(max-width: 800px){
    padding: 0px 20px;
  }
`

export const ListMembers = styled.ul`
  display:flex;
  flex-direction: column;
  margin-top: 50px;

`
type IMemberIndex ={
  index: number
}

export const Member = styled.li<IMemberIndex>`
  display: grid;
  grid-template-columns:1fr 2fr;
  grid-gap: 30px;
  margin-top: 30px;
  width: 100%;

  :first-child{
    margin-top: 0px;
  }

  :nth-child(even){
    direction: rtl
  }

  @media(max-width: 800px){
    grid-template-columns: 1fr;
    padding: 0px 10px;
  }
`

export const Photo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img{
    width: 100%;
    border-radius: 5px;
  }

  @media(max-width: 800px){
    img{
      width: 200px;
      height: 200px;
      border-radius: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  @media(max-width: 400px){
    img{
      width: 150px;
      height: 150px;
      border-radius: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: column;
  border-bottom: .1rem solid #ccc;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  img{
    max-height: 500px;
    border-radius: 5px;
  }
  h2{
    font-size: 1.1rem;
    text-align: left;
  }
`

export const SocialMedia = styled.section`
  justify-self: flex-end;

  svg{
    width: 25px;
    height: 25px;
    margin: 10px 5px;
  }
`
