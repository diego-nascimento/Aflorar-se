import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0px 20px;

  @media(max-width: 500px){
    padding: 0px 10px;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  
  img{
    width: 100%;
  }
`

export const HeaderContainer = styled.div`
  border-left: 3px solid red;
  padding-left: 10px;
  margin-top: 30px;
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: normal;

  @media(max-width: 600px){
    font-size: 1.3rem;
  }
`

export const Content = styled.section`
  margin-top: 30px;
  line-height: 2rem;
  font-size: 1.1rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;
`

export const Tag = styled.li`
  background: #ddd;
  padding: 2px 20px;
  border-radius: 5px;
  flex-basis: 100%;
  transition: .3s;
  
  :hover{
    background: #ccc;
  }
`
