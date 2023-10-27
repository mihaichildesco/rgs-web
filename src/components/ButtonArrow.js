import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-style: none;
  color: #239bf7;
  text-transform: uppercase;
`;

const ButtonArrow = () => {
  return <StyledButton>learn more</StyledButton>;
};

export default ButtonArrow;
