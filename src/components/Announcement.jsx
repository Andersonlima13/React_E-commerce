import styled from "styled-components";

const Container = styled.div`
 
  height: 30px;
  background: linear-gradient(90deg, rgba(244,28,87,1) 14%, rgba(156,40,81,1) 67%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;

  
  
`;

const Announcement = () => {
  return <Container>Aproveite o frete grátis em todo país!</Container>;
};

export default Announcement;