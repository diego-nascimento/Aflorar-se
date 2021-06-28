import styled from 'styled-components'

export const CategoriaList = styled.ul`
`;

interface ICategoriaStyle{
  active: boolean
}

export const Categoria = styled.li<ICategoriaStyle>`
  padding: 2px 20px;
  transition: .3s;
  margin-left: 5px;
  font-size: 1.2rem;
  display: inline-block;
  background: ${({active}) => active ? "#ddd":'none' };

  :hover{
    text-decoration: ${({active}) => active? 'none': 'underline' };
  }

  @media(max-width: 800px){
    display: none;
  }
`;