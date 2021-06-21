import styled, {createGlobalStyle} from 'styled-components'

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
  }

  h1{
    font-size: 2.7rem;

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

    @media(max-width: 100px){
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
  }
`;

