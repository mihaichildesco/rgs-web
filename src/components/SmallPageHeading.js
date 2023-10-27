import React from "react";
import styled from "styled-components";

const Heading = styled.span`
  font-family: "Exo", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #239bf7;
  margin-top: 54px;

  @media (min-width: 768px) {
    margin-top: 0px;
    margin-left: 0px;
  }
`;

const SmallPageHeading = (props) => {
  return <Heading>{props.title}</Heading>;
};

export default SmallPageHeading;
