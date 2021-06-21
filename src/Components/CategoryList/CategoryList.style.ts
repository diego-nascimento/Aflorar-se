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
  border-left: 1px solid #111;
  font-size: 1.2rem;
  display: inline-block;
  background: ${({active}) => active? '#ccc': 'transparent'};

  :last-child{
    border-right: 1px solid #111;
  }
  
  :hover{
    background: #eee;
  }
`;