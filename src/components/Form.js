import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 320px;

  @media (min-width: 768px) {
    width: 600px;
  }

  input {
    background: #000000;
    border: 1px solid #ffffff;
    border-radius: 5px;
    width: 100%;
    height: 60px;
    margin-bottom: 30px;
    font-family: "Exo";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #727272;
    padding-left: 20px;
  }

  textarea {
    background: #000000;
    border: 1px solid #ffffff;
    border-radius: 5px;
    width: 100%;
    height: 200px;
    font-family: "Exo";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #727272;
    padding-left: 20px;
    padding-top: 9px;
    margin-bottom: 40px;
  }
`;

const Form = () => {
  return (
    <FormContainer>
      <input type="text" placeholder="Your Name" data-lpignore="true" />
      <input type="text" placeholder="Company Name" />
      <input type="email" placeholder="Company Email" />
      <textarea name="message" id="message" placeholder="Message"></textarea>
    </FormContainer>
  );
};

export default Form;
