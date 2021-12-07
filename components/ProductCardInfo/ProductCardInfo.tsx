import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Button } from "../index";

interface Props {
  name: string;
  price: string;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductCardInfo = (props: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    props.onClickFunction(e);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <Wrapper>
      <SpanContainer>
        <h2>{props.name}</h2>
        <p>{props.author}</p>
        <p>{props.price}€</p>
      </SpanContainer>
      <Fragment>
        <Button onClickFunction={handleClick} isClicked={isClicked}>
          AJOUTER AU PANIER
        </Button>
      </Fragment>
    </Wrapper>
  );
};

export default ProductCardInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction : column;
  align-items:start;
  gap: 1rem;
  padding: 16px;
  padding-bottom: 7%;
`;

const SpanContainer = styled.div`
  font-weight:bolder;
  font-size:22px;
  h2{
    margin: 0;
    font-size: 1.5rem;
  }
  p{
    margin: .5rem 0 0 0;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.orange};
  }
`;
