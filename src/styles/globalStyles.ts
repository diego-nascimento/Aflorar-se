import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    overflow-x: hidden;
    //background-image: url('/fundo.png');
    font-family: 'Open Sans', sans-serif;
  }

  h1{
    font-size: 2.7rem;
    font-weight: bolder;
  }

  h2{
    font-size: 1.8rem;
  }

  a{
    text-decoration: none;
    color: inherit;


    :hover{
      color: inherit;
      text-decoration: none;
    }
  }

  .Container{
    width: 100%;
    max-width: 1300px;

    @media(max-width: 1200px){
      max-width: 900px;
    }

    @media(max-width: 1000px){
      max-width: 750px;
    }
  }

  @media(max-width: 800px){
    h1{
      font-size: 2rem;
    }

    h2{
     font-size: 1.3rem;
    }

    p{
      font-size: .9rem;
    }
  }

  @media(max-width: 400px){
    h1{
      font-size: 1.5rem;
    }

    h2{
     font-size: 1rem;
    }

    p{
      font-size: .6rem;
      line-height: .9rem;
    }
  }
`
