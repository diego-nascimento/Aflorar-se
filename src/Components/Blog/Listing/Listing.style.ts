import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 15px;
`;



export const PostList = styled.ul`
`;

export const Post = styled.li`
  width: calc(100% - 20px);
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #111;
  cursor: pointer;
  padding: 10px 0px;

  :first-child{
    border-top: 1px solid #111;
  }

  @media(max-width: 900px){
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;

  :hover{
    img{
      transform: scale(1.1);
    }

    .Author{
      p{
        background-color: #111;
      }
    }
  }

  img{
    width: 100%;
    height: 250px;
    transition: .3s;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  position: relative;

  @media(max-width: 900px){
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  :hover{
    text-decoration: underline;
  }
`;

export const TextResumed = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
  font-size: 1.1rem;

  @media(max-width: 800px){
    font-size: 1rem;
  }
`;

export const Responsable = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin-top: 10px;

  p{
    padding: 2px 5px;
    background: #eee;
    border-radius: 3px;
    transition: .3s;
  }
`;