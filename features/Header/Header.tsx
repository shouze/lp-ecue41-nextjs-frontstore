import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Heading><img src="/logo-blanc.png" alt="" /></Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color:#131921;
  margin:0px;
  
  h1{
    margin:0px;
    display:flex;
    height:60px;
    width:100%;
  }

  img{
    width:150px;
    display:block;
    object-fit: contain;
  }
`



