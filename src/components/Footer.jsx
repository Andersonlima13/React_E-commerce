import styled from  "styled-components"
import {FaInstagram , FaFacebook , FaMailBulk , FaPhone, FaEnvelope}  from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display:flex;`

const Left = styled.div`
    display: flex;
    flex:1;
    flex-direction:column;
    padding:20px;
    `

const Center = styled.div`
    padding : 20px;
    flex:1;`

const Right = styled.div`
    flex:1;
    padding : 20px;`

const Logo = styled.h1` 
  `

const Desc = styled.p`
    margin-top: 20px;`

const SocialContainer = styled.div`
    display:flex;`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color : white;
    background-color: #${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    margin-top :10px;
    `
const Title = styled.h3`
    margin-bottom : 30px;
`
const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display: flex;
    flex-wrap:wrap;` 

const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;` 

const Contact = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items:center;
    `
  



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SOBRE</Logo>
            <Desc> Links e informações nos sigam em nossas redes sociais.Site fictício Desenvolvido por Anderson Lima, aplicação
               construida ultilizando react , servindo como projeto pessoal   </Desc>
            <SocialContainer>
                <SocialIcon color = "e4405f">
                    <FaInstagram />
                </SocialIcon>
                <SocialIcon color = "3b5999">
                    <FaFacebook/>
                </SocialIcon>
                <SocialIcon color = "e60023">
                    <FaMailBulk/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> INFORMAÇÕES </Title>
            <List>
                <ListItem>Pagina inicial</ListItem>
                <ListItem>Termos</ListItem>
                <ListItem>Lista</ListItem>
                <ListItem>Meu Perfil</ListItem>
                <ListItem>Moda Masculina</ListItem>
                <ListItem>Moda Feminimna</ListItem>
                <ListItem>Acessórios</ListItem>
                <ListItem>Carrinho</ListItem>
            </List>
        </Center>
        <Right> <Title> CONTATE-NOS  </Title>
            <Contact>
                <FontAwesomeIcon icon={faLocationDot} style= {{marginRight:"10px"}}/>Brasil , Estado Cidade nº 10
            </Contact>
            <Contact>
                <FaPhone style= {{marginRight:"10px"}}/> +91 123456789
            </Contact>
            <Contact>
                <FaEnvelope style= {{marginRight:"10px"}} />
                anderson.lima18pb@gmail.com
            </Contact>     
        </Right>

    </Container>
  )
}

export default Footer