import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Container = styled.div``


const Title = styled.h1`
     margin: 20px;`


const FilterContainer = styled.div`
    display: flex;
    justify-content:space-between;`

const Filter = styled.div`
    margin : 20px;`

const FilterText = styled.span`
    font-size : 20px;
    font-weight : 600;
    padding : 20px;`   

const Select = styled.select`
    padding : 10px;
    margin-right: 20px;
`

const Option = styled.option``

    
function ProductList() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title> Vestidos </Title>
        <FilterContainer>
            <Filter> <FilterText> eae </FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>a</Option>
                <Option>b</Option>
                <Option>c</Option>
                <Option>d</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>a</Option>
                <Option>b</Option>
                <Option>c</Option>
                <Option>d</Option>
            </Select>                           
            </Filter>
            <Filter> 
                <FilterText> sort </FilterText>
            <Select>
                <Option selected Products>new </Option>
                <Option> oii</Option>
                <Option> oii</Option>
                <Option> oii</Option>
            </Select>
            </Filter>
           
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
