
import styled from 'styled-components'

export const Wrapper = styled.section``;

export const ListMembers = styled.ul`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

export const Member = styled.li`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 30px;
  margin-top: 30px;
  padding: 0px 20px;

  :first-child{
    margin-top: 0px;
  }

  :nth-child(even){
    direction: rtl;
  }

  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`;

export const Photo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img{
    width: 100%;
  }

  @media(max-width: 800px){
    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

  }

  @media(max-width: 800px){
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  flex-direction: column;
  border-top: .1rem solid #ccc;
  padding-top: 20px;

  @media(max-width: 800px){
    margin: 10px 10px;
  }
`;