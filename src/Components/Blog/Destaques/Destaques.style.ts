import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 0px 20px;

  h3{
    font-size: 1.1rem;
    text-transform: uppercase;
    border-left: 4px solid red;
    padding-left: 5px;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  width: 100%;
  height: 230px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-top: 10px;

  @media(max-width: 900px){
    width: calc(100% - 15px);
  }

  :first-child{
    margin-top: 0px;
  }

  :hover{
    div{
      transform: scale(1.1);
    }
  }
`;

interface IImageContainer{
  url: string
}

export const ImageContainer = styled.div<IImageContainer>`
  background: url(${props => props.url});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: .2s;
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 3px;
  left: 10px;
  color: white;
  background: rgba(0,0,0, .8);
  font-size: 1.1rem;
  padding: 2px 4px;
`;