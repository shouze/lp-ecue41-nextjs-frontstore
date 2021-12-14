import styled from "styled-components";
import { NavHeading } from "../../components";

const Navbar = () => {
  return (
    <Wrapper>
      <NavHeading link="/">Produits</NavHeading>
      <NavHeading link="/cart">Panier</NavHeading>
      <NavHeading link="/checkout">Paiement</NavHeading>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${(props) => props.theme.colors.quaternary};
  height: 40px;
  color: white;
  display: flex;
  justify-content: start;
  padding-left: 20px;
  h4 {
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
`;
