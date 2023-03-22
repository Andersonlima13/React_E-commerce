import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'



const Container = styled.div`
font-weight:bold;
color:#000;
    width : 100vw ; 
    height : 100vh;
    background: linear-gradient(rgba(236,203,203,0.7), 
                rgba(159,111,155,0.8)), url("https://i.ibb.co/SRFmjwv/payment.jpg");
    display: flex;
    justify-content:center;
    align-items:center;`

const Wrapper = styled.div`
    height : 60%;
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

const Link = styled.a` 
    text-decoration: underline;
    cursor : pointer;
    font-size: 14px;
    margin-top: 15px ;`

const Button = styled.button`
margin-top: 20px;
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
    margin-top: 15px; `



const Login = async (values) => {
    try{
        const response = await axios.post("http://localhost:5000/api/auth/login",
        {
            username:values.username,
            password:values.password
        }
        )
    console.log(response.data)
    }
    catch(err){
        console.log(err)
    }
}


function Register() {
  return (
    <Container>
        <Wrapper>
        <Icon><FontAwesomeIcon icon={faUser} /></Icon>
            <Title>LOGIN</Title>
            
            
            <Form onClick={Login}>      
                <Input placeholder="E-mail" name="username" />
                <Input placeholder="Senha"  name='password'/>
                <Link>ESQUECEU SUA SENHA ?</Link>
                <Link>CRIAR UMA NOVA CONTA</Link>
               <Button type='submit'>ENTRAR</Button>
              
             


              
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
