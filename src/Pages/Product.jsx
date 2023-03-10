import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle , faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const Container = styled.div``

const Wrapper = styled.div`
  padding : 50px;
  display:flex;`

const ImgContainer = styled.div`
  flex: 1;`

const Image = styled.img`
  width : 100%;
  height : 90vh;
  object-fit: cover;`

const InfoContainer = styled.div`
  flex: 1;
  padding : 0px 50px;`

const Title = styled.h1`
  font-weight : 200;`

const Desc = styled.p`
  margin : 20px 0px;`

const Price = styled.span`
  font-wight: 100;
  font-size : 40px;`


const Filter = styled.div`
  display: flex;
  align-items : center;
 ;`

const FilterContainer = styled.div`
  width : 50%;
  margin : 30px 0px; 
  display:flex;
  justify-content: space-between;`

const FilterTitle = styled.span`
  font-size : 20px;
  font-weight: 200;`

const FilterSize = styled.select`
  margin-left : 10px;
  padding : 5px;`

const FilterOption = styled.option``

const FilterColor = styled.div`
  width : 20px;
  height : 20px;
  border-radius: 50%; 
  background-color: ${props => props.color}; 
  margin : 0px 5px ; 
  cursor : pointer;`

const AddContainer = styled.div`
  display: flex;
  align-item: center;
  width : 50%;
  justify-content:space-between;
 `

const AmountContainer = styled.div`
  display : flex;
  align-items: center;
  font-weight: 700;  `

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid red ; 
  display: flex;
  align-items: center;
  justify-content: center; 
  margin: 0px 5px; 
  `

const Button = styled.button`
  padding : 15px;
  border: 2px solid red; 
  background-color: white;
  cursor : pointer;
  font-weight: 700;

  &:hover {
    background-color: #FFC0CB; 
   } `

function Product() {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
      <ImgContainer>
        <Image src="https://i.ibb.co/BrcqkQ2/Mens-Jake-Guitar-Vintage-Crusher-Tee-68382-1-lg-1.png" />
      </ImgContainer>
      <InfoContainer>
        <Title> PRODUTO X </Title>
        <Desc> "DESCRIÇÃO DO PRODUTO" </Desc>
        <Price> 000,00 R$</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle> COR </FilterTitle>
            <FilterColor color ="black"/>
            <FilterColor color ="blue"/>
            <FilterColor color = "gray"/>
          </Filter>
        <Filter>
          <FilterTitle> TAMANHO </FilterTitle>
          <FilterSize>
            <FilterOption>1</FilterOption>
            <FilterOption>2</FilterOption>
            <FilterOption>3</FilterOption>
            <FilterOption>4</FilterOption>
            <FilterOption>5</FilterOption>
          </FilterSize>
        </Filter>
        </FilterContainer>
       <AddContainer>
        <AmountContainer>
        <FontAwesomeIcon icon={faMinusCircle} />
          <Amount>2</Amount> 
        <FontAwesomeIcon icon={faPlusCircle} />
        </AmountContainer>
        <Button>ADCIONAR AO CARRINHO</Button>
       </AddContainer> 
      </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Product