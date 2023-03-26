import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faShoppingBasket , faHeart } from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from "react-router-dom"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position : absolute;
  top : 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: all 0.5s ease;
  `

const Container = styled.div`
  flex : 1;
  margin: 5px;
  min-width: 280px;
  height:350px;
  display: flex;
  align-items: center;
  justify-content : center;
  background-color : gray;
  position : relative ;
  &:hover ${Info} {
    opacity:1;
  } `

const Circle = styled.div`
  width : 200px ;
  height : 200px;
  border-radius: 50%;
  background-color : #7f868e  ;
  position : absolute;`

const Image = styled.img`
  height : 75%;
  z-index : 2;`

const Icon = styled.div`
  cursor:pointer;
  width: 40px;
  height:40px;
  border-radius:50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content:center;
  margin : 10px;
  transition : all 0.5s ease;
  &:hover{
    background-color: #ee2853;
    transform: scale(1.1);
  }
  `





const Product = ({item}) => {

  const navigate = useNavigate();
const NavProduct = () => {
    navigate ('/Register')}


  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon><FontAwesomeIcon onClick = {NavProduct} icon={faShoppingBasket} /></Icon>
        <Icon><FontAwesomeIcon icon={faSearch} /></Icon>
        <Icon><FontAwesomeIcon icon={faHeart} /></Icon>
      </Info>
    </Container>
  )
}

export default Product