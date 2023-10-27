import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #fff;
  max-width: 300px;
  height: 320px;
  margin: 0px auto;
  background: linear-gradient(
    180deg,
    #003156 0%,
    #1c1c1c 99.97%,
    #1c1c1c 99.98%,
    #1c1c1c 99.99%
  );
  border-radius: 25px;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    padding: 34px 38px 37px 38px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }

  hr {
    width: 60px;
    margin: 0 auto;
    height: 5px;
    background-color: #239bf7;
    border: none;
    margin-bottom: 17px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    text-align: center;

    margin: 0.5rem 1rem;
  }
`;

const CustomContainer = (props) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <hr />
      <p>{props.paragraph}</p>
    </Container>
  );
};

export default CustomContainer;
