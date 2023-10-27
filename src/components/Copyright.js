import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Exo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  text-align: center;
  color: #727272;
  margin-top: 104px;
  padding-bottom: 63px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
  }
`;

const Copyright = () => {
  return (
    <Wrapper>
      <p>© 2005-2023 Company Name.</p>
      <p>Toate drepturile rezervate.</p>
    </Wrapper>
  );
};

export default Copyright;
