import React from "react";
import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">
        <Image src="/images/logo.png" alt="Aixmazone" width={214} height={61} />
      </Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  margin: 0px;
`;
