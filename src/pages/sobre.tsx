import React from 'react'
import LayoutBase from '../Components/Layout/base/Base'
import {WrapperProjeto, LogoContainer, WrapperMembers,ListMembers, Member, Photo, Description,Content, SocialMedia} from '../PageStyles/Sobre.style'
import {ImFacebook, } from 'react-icons/im'
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import { IMember } from '../interfaces/IMember'
import { GetFactory } from '../Factory/http/GetFactory'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import marked from 'marked'

interface IData{
  id: string,
  membros: Array<IMember>,
  descricao_projeto: string
}

interface ISobre{
  data: IData
}

const Sobre: React.FC<ISobre> = ({data}) =>{
  return(
    <LayoutBase >
      <WrapperProjeto className="Container">
        <h1>Nosso Projeto</h1>
        <LogoContainer>
          <img src="/banner1.jpg" alt="Banner" />
        </LogoContainer>
        <Content dangerouslySetInnerHTML={{ __html: marked(data.descricao_projeto) }} />
      </WrapperProjeto>
      <WrapperMembers className='Container'>
        <h1>Sobre a Equipe</h1>
        <ListMembers>
          {data.membros && data.membros.map((membro:IMember) =>{
            return(
              <Member key={membro.id}>
                <Photo className='Photo'>
                  <img src={membro.photo.url} alt={membro.name} />
                </Photo>
                <Description className='Description'>
                  <h2>{membro.name}</h2>
                  <Content dangerouslySetInnerHTML={{ __html: marked(membro.text) }} />
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
      </WrapperMembers>
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
        membros: response.body.membros,
        descricao_projeto: response.body.descricao_projeto
      }
    }
  }
}
