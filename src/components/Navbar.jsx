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
  font-weight:bold;
  
`;

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  text-shadow: 1px 1px 2px #e61543;
 
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  box-shadow: 1px 1px 2px #e61543;
`;

const Input = styled.input`
  border: none;
  outline:none;
 
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-shadow: 1px 1px 2px #e61543;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight:bold;

  
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-shadow: 1px 1px 2px #e61543;
  &:hover{
    text-shadow: 1px 4px 10px #e61543;
    transform: scale(1.1);
    transition-property:background-color;
    transition-duration: 1000ms;
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
            <Language onClick={Home}>PT/BR</Language>
            <SearchContainer>
                <Input />
                <FontAwesomeIcon style = {{color:"black"}} icon={faSearch} />
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
