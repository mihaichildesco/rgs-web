import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Exo", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #239bf7;
  border-style: none;
  padding: 18px 16px;
  border-radius: 12px;
  width: 140px;
`;

const Button = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
