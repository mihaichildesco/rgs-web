import React from "react";
import styled from "styled-components";
import Facebook from "../images/facebook.png";
import Insta from "../images/insta.png";
import Linkedin from "../images/linkedin.png";

const SocialIcons = () => {
  return (
    <Wrapper>
      <a href="https://www.facebook.com/">
        <img src={Facebook} alt="facebook icon" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={Insta} alt="Instagram icon" />
      </a>
      <a href="https://www.linkedin.com/">
        <img src={Linkedin} alt="Linkedin icon" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  width: 232px;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export default SocialIcons;
