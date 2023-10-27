import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: rgba(35, 155, 247, 0.25);
  border-radius: 10px;
  color: #239bf7;
  border: none;
  text-align: center;
  font-family: "Exo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin: 20px;
  width: 140px;
  height: 50px;
`;

const ButtonGradient = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default ButtonGradient;
