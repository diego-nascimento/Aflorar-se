import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 30px;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 5fr 2fr;

  @media(max-width: 900px){
    grid-template-columns: 1fr;

    grid-row-gap: 20px;
  }
`;
