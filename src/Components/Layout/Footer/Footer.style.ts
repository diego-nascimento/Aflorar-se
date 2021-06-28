import styled from 'styled-components'
import {styles} from '../../../styles/theme.styles'


export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${styles.ComponentBGDark};  
  color: ${styles.fontColorLight};
  display: flex;
  justify-content: center;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;