import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">
        <Image src="/images/logo.png" alt="Aixmazone" width={189} height={60} />
      </Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
`;
