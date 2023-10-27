import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import HamIcon from "../images/hamburger-icon.png";
import styled from "styled-components";
import Navbar from "./Navbar";
import NavbarHam from "./Hamburger/NavbarHam";
import { Link } from "gatsby";

// have to use styled components to style the header
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  align-items: center;
`;
const StyledLogoImg = styled.img``;
const StyledHamIcon = styled.img`
  width: 40px;
  height: 30px;
`;

const Header = () => {
  const isBrowser = typeof window !== "undefined" ? window.innerWidth : 350;

  const [windowWidth, setWindowWidth] = useState(350);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogoImg src={Logo} alt="company logo" />
      </Link>
      {windowWidth <= 768 ? <NavbarHam /> : null}
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
