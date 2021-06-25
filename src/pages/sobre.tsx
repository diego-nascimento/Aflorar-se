import React from 'react'
import LayoutBase from '../Components/Layout/base/Base'
import {Wrapper,ListMembers, Member, Photo, Description} from '../PageStyles/Sobre.style'
const Sobre: React.FC = () =>{
  return(
    <LayoutBase >
      <h1>Sobre a Equipe</h1>
      <Wrapper className='Container'>
        <ListMembers>
          <Member>
            <Photo className='Photo'>
              <img src="http://www.moreno.pe.gov.br/portal2/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="iamgem aqui" />
            </Photo>
            <Description className='Description'>
              <h2>Nome do Candango</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Description>
          </Member>

          <Member>
            <Photo className='Photo'>
              <img src="http://www.moreno.pe.gov.br/portal2/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="iamgem aqui" />
            </Photo>
            <Description className='Description'>
              <h2>Nome do Candango</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Description>
          </Member>
        </ListMembers>
      </Wrapper>
      
    </LayoutBase>
  )
}

export default Sobre