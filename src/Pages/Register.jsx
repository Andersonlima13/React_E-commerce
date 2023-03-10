import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'



const Container = styled.div`

    color:#000;
    width : 100vw ; 
    height : 100vh;
    background: linear-gradient(rgba(236,203,203,0.7), 
                rgba(159,111,155,0.8)), url("https://i.ibb.co/SRFmjwv/payment.jpg");
    display: flex;
    justify-content:center;
    align-items:center;`

const Wrapper = styled.div`
    width: 30%;
    padding : 20px;
    background-color : transparent;
    border: 1px solid;
    border-radius : 10%;
    box-shadow: 1px 1px 12px 10px #ee2853;
   
    
    `

const Title = styled.h1`
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 25px;
    font-weight: 300;
    margin-top:8px;
    color: black;
    text-shadow: 1px 1px 2px white, 0 0 25px blue, 0 0 5px #ee2853;`

const Form = styled.form`
    
    
    display:flex;
    flex-direction:column;`

const Input = styled.input`
    flex: 1;

    margin: 20px 10px 0px 0px;
    padding : 10px;
    border:none;
    border-bottom: 2px solid #000;
    background-color: transparent ;
    outline:none;
    
     `

const Terms = styled.span`

    font-size: 18px;
    margin: 20px 0px;`

const Button = styled.button`
   margin-left: 35%; 
    width: 30%;
    height: 100%;
    padding: 15px 20px;
    cursor : pointer ;
    border: 2px solid;
    background-color: transparent;
    font-weight:bold;

    &:hover{
        background-color: #ee2853;
        transform: scale(1.1);
        transition-property:background-color;
        transition-duration: 1000ms;
      }

     `
const Icon = styled.div`
    color: #ee2853;
    font-size: 80px; 
    justify-content:center;
    align-items:center;
    display:flex;
    margin-top: 8px; `



function Register() {
  return (
    <Container>
        <Wrapper>
        <Icon><FontAwesomeIcon icon={faUser} /></Icon>
            <Title> Criar Conta</Title>
            
            
            <Form>
            
                 <Input placeholder="Nome" />  
                 
                <Input placeholder="E-mail" />
                
                <Input placeholder="N??mero" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme a senha"/> 
                <Terms>Ao se registar voc?? concorda com nossos termos, e est?? de acordo com nossa <b> POL??TICA DE PRIVACIDADE</b>  </Terms>
               
               <Button>REGISTRE-SE</Button>
              
             


              
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
