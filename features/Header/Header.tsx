import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";
import Image from "next/image";  

const Header = () => {
  return (
    <Wrapper>
      <img src="/Logo.svg" alt="Aixmazone" />
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  img {
    display: block;
    margin: 0 auto;
    width: clamp(200px, 350px, 600px);
  }
`;
