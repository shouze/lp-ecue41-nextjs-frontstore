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
  border: 1px solid ${(props) => props.theme.colors.borderYellow};
  border-radius: 99999px;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.primary};
  transition: background-color 0.2s ease;
  padding: 10px 20px;
  &:hover{
    border: 1px solid ${(props) => props.theme.colors.hoverBorderYellow};
    background-color: ${(props) =>
      props.isClicked
        ? props.theme.colors.lightText
        : props.theme.colors.hoverYellow};
  }
  &:focus{
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.borderYellow};
    background-color: ${(props) => props.theme.colors.lightText};
    color: ${(props) => props.theme.colors.primary};
  }
`;
