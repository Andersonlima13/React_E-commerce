import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from "react-router-dom"



const Container = styled.div`
  height: 60px;
 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover{
    background-color: #ee2853;
    transform: scale(1.1);
  }
  
`;




const Navbar = () => {

const navigate = useNavigate();
const Registrar = () => {
    navigate ('/Register')}

const Entrar = () => {
  navigate ('/Login')

}

const Cart = () => {
  navigate ('/Cart')

}

const Home = () => {
  navigate ('/')

}


  return (
    <Container>
      <Wrapper>
        <Left>
            <Language onClick={Home}  >PT/BR</Language>
            <SearchContainer>
                <Input />
                <FontAwesomeIcon style = {{color:"gray"}} icon={faSearch} />
            </SearchContainer>
        </Left>
        <Center>
            <Logo> BuyExpress </Logo>
        </Center>
        <Right> 
            <Menu   onClick={Registrar} >REGISTRAR</Menu>
            <Menu onClick={Entrar}>ENTRAR</Menu>
            <Menu onClick={Cart} ><FontAwesomeIcon icon={faCartShopping} /></Menu>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
