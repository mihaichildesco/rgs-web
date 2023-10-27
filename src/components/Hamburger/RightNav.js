import React from "react";
import styled from "styled-components";
import SocialIcons from "../SocialIcons";
import Logo from "../../images/logo.png";
import { Link } from "gatsby";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding: 18px 10px;
  }

  li a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: rgba(0, 0, 0, 0.95);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      margin-top: 20px;
    }
  }
`;

const StyledLogoImg = styled.img``;
const StyledHeaderHam = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
`;

const StyledContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Linebreak = styled.hr`
  width: 100vw;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <StyledHeaderHam>
        <StyledLogoImg src={Logo} alt="company logo" />
      </StyledHeaderHam>

      <StyledContainer>
        <Linebreak />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </StyledContainer>
      <SocialIcons />
    </Ul>
  );
};

export default RightNav;
