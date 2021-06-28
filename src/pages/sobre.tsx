import React from 'react'
import LayoutBase from '../Components/Layout/base/Base'
import {Wrapper,ListMembers, Member, Photo, Description, SocialMedia} from '../PageStyles/Sobre.style'
import {ImFacebook, } from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import { IMember } from '../interfaces/IMember'
import { GetFactory } from '../Factory/http/GetFactory'
import { GetStaticProps } from 'next'
import Link from 'next/link'

interface IData{
  id: string,
  membros: Array<IMember>
}


interface ISobre{
  data: IData
}


const Sobre: React.FC<ISobre> = ({data}) =>{
  return(
    <LayoutBase >
      <h1>Sobre a Equipe</h1>
      <Wrapper className='Container'>
        <ListMembers>
          {data.membros && data.membros.map((membro:IMember) =>{
            return(
              <Member key={membro.id}>
                <Photo className='Photo'>
                  <img src={membro.photo.url} alt={membro.name} />
                </Photo>
                <Description className='Description'>
                  <h2>{membro.name}</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <SocialMedia>
                    {membro.facebook && 
                    <Link href={membro.facebook}>
                      <a target='blank'><ImFacebook /></a>
                    </Link>}
                    {membro.instagram && 
                    <Link href={membro.instagram}>
                      <a target='blank'><AiOutlineInstagram /></a>
                    </Link>}
                    {membro.whatsapp &&
                    <Link href={membro.whatsapp}>
                      <a target='blank'><AiOutlineWhatsApp /></a>
                    </Link>
                    }
                    {membro.twitter &&  
                    <Link href={membro.twitter}>
                      <a target='blank'><FaTwitter /></a>
                    </Link> }                                 
                  </SocialMedia>
                </Description>
              </Member>
            )
          })}
        </ListMembers>
      </Wrapper>
    </LayoutBase>
  )
}

export default Sobre

export const getStaticProps: GetStaticProps = async (context) => {
  const Get = GetFactory()
  const response = await Get.handle({url: `${process.env.APIURL}/aflorar-se-sobre`, body: null})
  return{
    props:{
      data:{
        id: response.body.id,
        membros: response.body.membros
      }
    }
  }
}
