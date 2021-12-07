import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CTA = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default CTA;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid ${(props) => props.theme.colors.borderYellow};
  border-radius: 99999px;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.darkText};
  &:disabled {
    opacity: 0.4;
    background: lightgrey;
  }
<<<<<<< Updated upstream
  cursor: pointer;
=======
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
>>>>>>> Stashed changes
`;
