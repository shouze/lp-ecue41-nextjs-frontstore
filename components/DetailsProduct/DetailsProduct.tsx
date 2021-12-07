import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Button } from "../index";


interface Props {
    name: string;
    price: string;
    id: number;
    description: string;
    onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const ProductCardInfo = (props: Props) => {
  
    return (
      <Wrapper>
        test
      </Wrapper>
    );
  };
  
  export default ProductCardInfo;
  
  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    padding-top: 5%;
    padding-bottom: 7%;
  `;
  
  const SpanContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      display: flex;
      align-items: center;
    }
  `;
  