import React from 'react'
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle , faMinusCircle} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux"
import Product from '../components/Product';
import { mobile } from "../responsive";



const Container = styled.div`
    `

const Title = styled.h1`
    font weight : 300;
    text-align: center`

const Wrapper = styled.div`
    ${mobile({ padding: "10px" })};
    padding : 20px;`

const Top = styled.div`
    padding : 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `
const TopButton = styled.button`
    padding : 10px;
    font-weight : 500;
    cursor : pointer;
    border : ${props => props.type === "filled" && "none"};
    background-color : ${props => props.type === "filled" ? "black" : "transparent"};
    color : ${props => props.type === "filled" && "white"};`


const TopTexts = styled.div`
 ${mobile({ display: "none" })}
    `

const Text = styled.span`
  
    text-decoration: underline;
    cursor : pointer;
    margin : 0px 10px;`


const Bottom = styled.div`
    display : flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    `

const Info = styled.div`
    flex : 3;`




const ProductContainer = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
    display:flex;
    flex: 2;`

const Image = styled.img`
    width : 200px;`

const PriceDetail = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;  
    flex: 1;
    flex-direction:column;`

const Details = styled.div`
    padding : 20px ; 
    display: flex;
    flex-direction : column;
    justify-content: space-around;`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width : 20px;
    height : 20px ;
    border-radius : 50%;
    background-color: ${props => props.color }`

const ProductSize = styled.span``

const ProductAmount = styled.div`
    display : flex;
    align-items: center;
    margin-bottom: 20px;
    `

const Amount = styled.div`
    font-size : 24px;
    margin 5px;
    ${mobile({ margin: "5px 15px" })}`

const Price = styled.span`
    font-size : 30px;
    font-weight: 200;
     ${mobile({ marginBottom: "20px" })}`

const Hr = styled.hr`
    background-color:#ffff;`



const Summary = styled.div`
    flex : 1;
    border : 0.5px solid lightgray;
    border-radius: 10px;
    padding : 20px;
    height: 50vh;`


const SummaryTitle = styled.h1`
    font-weight: 200; `


const SummaryItem = styled.div`
    margin : 30px 0px;
    display : flex;
    justify-content:space-between;
    font-weight : ${props => props.type === "total" && "500"};
    font-size : ${props => props.type === "total" && "24px"};`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width : 100%;
    padding : 10px;
    background-color :transparent;
    color :black;
    cursor : pointer;
    
    &:hover{
        background-color: #ee2853;
        transform: scale(1.1);
        transition-property:background-color;
        transition-duration: 1000ms;
      }`



function Cart() {


    const {products} = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <Container>
        <Navbar />
        <Announcement/>
        <Wrapper>
            <Title>Meu Carrinho</Title>
            <Top> 
                <TopButton>CONTINUAR COMPRANDO  </TopButton>
                <TopTexts>
                    <Text> Lista De Compras(2)</Text>
                    <Text> Favoritos (0)</Text>
                </TopTexts>
                <TopButton type = "filled"> VOLTAR </TopButton>
            </Top>
            <Bottom>
                <Info>
                    <ProductContainer>
                        <ProductDetail>
                            {products.map((item) => ( <Product item={item} /> ))}
                            <Image src = "https://www.womenwantadventure.com.au/persistent/catalogue_images/products/wwatop.png"/>
                            <Details>
                                <ProductName> <b>Nome</b> Nome do produto</ProductName>
                                <ProductId> <b>ID</b> 65467159</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>tamanho</b> 44</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmount>
                            <FontAwesomeIcon icon={faPlusCircle} />
                                <Amount> 1</Amount>
                            <FontAwesomeIcon icon={faMinusCircle} />
                            </ProductAmount>
                            <Price> R$ 30 </Price>
                        </PriceDetail>
                    </ProductContainer>
                    <Hr/>
                    <ProductContainer>
                        <ProductDetail>
                            <Image src = "https://tse1.mm.bing.net/th?id=OIP.kkYSSKfbR8m8kXQzySV7TgHaHZ&pid=Api&P=0"/>
                            <Details>
                                <ProductName> <b>Nome</b> Vestido</ProductName>
                                <ProductId> <b>ID</b> 992844119</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Tamanho</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmount>
                            <FontAwesomeIcon icon={faPlusCircle} />
                                <Amount> 1</Amount>
                            <FontAwesomeIcon icon={faMinusCircle} />
                            </ProductAmount>
                            <Price> R$ 50 </Price>
                        </PriceDetail>
                    </ProductContainer>
                </Info>
                <Summary>
                    <SummaryTitle> PEDIDO </SummaryTitle>
                        <SummaryItem >
                            <SummaryItemText>Valor</SummaryItemText>
                            <SummaryItemPrice> 80,00 R$ </SummaryItemPrice>
                        </SummaryItem>
                        
                        <SummaryItem>
                            <SummaryItemText> Frete</SummaryItemText>
                            <SummaryItemPrice> 20,00 R$</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Desconto</SummaryItemText>
                            <SummaryItemPrice> - 10 R$</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type = "total">
                            <SummaryItemText>TOTAL</SummaryItemText>
                            <SummaryItemPrice> 100 R$</SummaryItemPrice>
                        </SummaryItem>
                    <Button>COMPRAR</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
