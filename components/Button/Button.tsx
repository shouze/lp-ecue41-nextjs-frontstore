import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  isClicked?: boolean;
}

const Button = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      isClicked={props.isClicked}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Props>`
  border: none;
  background-color: ${(props) =>
    props.isClicked
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  transition: background-color 0.2s ease;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #fcd200;
  color: ${(props) => props.theme.colors.darkText};
  border-radius: ${(props) => props.theme.borderRadius.big};
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    border-color: #f2c200;
  }
`;
