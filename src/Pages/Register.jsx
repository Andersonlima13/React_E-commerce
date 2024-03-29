import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
//import {useSelector , useDispatch} from "react-redux"
import { useState, useEffect } from "react"
import axios from 'axios';
import { mobile } from "../responsive";


import "../CSS/Form.css" 



const api = axios.create({
    baseURL : 'http://localhost:5000/api'
});




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
     ${mobile({ width: "75%" })}
    
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

 
// redux , alteração de usuário , jogoar os dados no banco
//const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer)

//cont dispatch = useDispatch()


//console.log({currentUser})


// é interessante transformar o type : "user / login " em variável, para evitar possiveis erros.

//const LoginClick = () => {
//    dispatch({
        //type: "User/login",
        // payload : {name : "nome", email : "email ", senha:" senha"},  // no payload podemos passar os dados que queremos passar para o console
//    })
//  }

// também é boa pratica escrever o dispatch em um arquivo à parte


const [User, setUser ] = useState([])
const [Name, setName] = useState('')
const [Pass, setPass] = useState('')
const [Email, setEmail] = useState('')


useEffect (() => {
    api.get('/user' ).then((response) => {
        console.log(response.data)
        setUser(response.data)
    })
} , [])




async function handleClickLogin() {
     await api.post('/auth/register', {
        Name,
        Pass,
        Email,
    }).then((response) =>{
        console.log(response)
    })
}




/*const handleClickLogin = async (values) => {
    await axios.post("http://localhost:5000/api/auth/register", {
       username:values.username,
       email: values.email,
       password: values.password,        
   }).then((response) => {
       console.log(response)
   })
}
*/




  return (
    <Container>
        <Wrapper>
        <Icon><FontAwesomeIcon icon={faUser} /></Icon>
            <Title> Criar Conta</Title>
            
            
            <Form  className = "sub">
           
                 <Input  placeholder="Nome" onChange={event => setName(event.target.value)} />  
                 
                <Input placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
                
                <Input  placeholder="Número" />
                <Input placeholder="Senha" onChange={event => setPass(event.target.value)} />
                <Input  placeholder="Confirme a senha" /> 
                <Terms>Ao se registar você concorda com nossos termos, e está de acordo com nossa <b> POLÍTICA DE PRIVACIDADE</b>  </Terms>
               
               <Button  type="button" onClick={handleClickLogin}>REGISTRE-SE</Button>
            
               


              
            </Form>
            
            
        </Wrapper>
       
    </Container>
    
  )
}

export default Register
