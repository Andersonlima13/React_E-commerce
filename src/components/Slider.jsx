import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {sliderItems} from "../data"
import { useState } from "react"


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;`
    

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:2;`

const Wrapper = styled.div`
    display:flex;
    height : 100%;
    transition: all 1.5s ease;
    transform : translateX( ${props => props.slideIndex * -100}vw);`

const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  background-color: #${props => props.bg}`

const Image = styled.img`
  width:90vh;
  height:80%
`

const ImgContainer = styled.div`
  height:100%;
  flex:1;`

const Info = styled.div`
  padding:50px;
  flex:1;`

const Title = styled.h1``

const Desc = styled.p`
  margin : 50px 0px;
  font-size: 20px;
  font-weight:500px;
  letter-space:3px;`

const Button = styled.button`
  padding : 10px;
  background-color:transparent;
  cursor : pointer;
  font-size:20px;
  &:hover{
    background: linear-gradient(90deg, rgba(244,28,87,1) 14%, rgba(156,40,81,1) 67%);
    transform: scale(1.25);
    
  }`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const HandleClick =(direction) => {
    
    if(direction ==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 :0 );
    }
  };

  return (
    <Container>
     
        <Arrow direction = "left" onClick={() => HandleClick("left")}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
        <Slide bg={item.bg} key = {item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <Info>
            <Title> {item.title}</Title>
            <Desc> {item.desc}</Desc>
            <Button> VER MAIS </Button>
            
          </Info>
        </Slide>
        ))}
        </Wrapper>
        <Arrow direction ="right" onClick={() => HandleClick("right")}>
        <FontAwesomeIcon icon={faArrowRight} />
        </Arrow>
        
        
        
    </Container>
  )
}

export default Slider