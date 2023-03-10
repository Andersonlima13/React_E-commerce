import React from 'react'
import styled  from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    height : 60vh;
    background-color: #fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;`
    
const Title = styled.h1`
    font-size: 70px;`

const Description = styled.div`
    font-size:24px;
    font-weight:300px;
    margin-bottom: 20px;:`

const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content:space-between;
    border: 1px solid lightgray;`


const Input = styled.input`
    border:none;
    flex:8;
    padding: 20px;`

const Button = styled.button`
    cursor: pointer;
    flex: 1;
    border:none;
    background-color:#1E90FF;
    color: white;
    &:hover{
        background-color:#6bb6ff;
        transform: scale(1.25);
        
      }`




function Newsletter() {
  return (
    <Container>
        <Title> Novidades! </Title>
        <Description> Receba notificações através do seu e-mail! </Description>
        <InputContainer>
            <Input placeholder="digite seu e-mail" />
            <Button>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
