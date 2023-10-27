import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 19.5rem;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    width: 293px;
  }

  li a {
    text-decoration: none;
    color: #fff;
  }
`;
const StyledBtn = styled.a`
  text-decoration: none;
  color: #239bf7;
  border: 1px solid #239bf7;
  border-radius: 6px;
  align-self: flex-start;
  font-family: "Exo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding: 18px 23px;
`;

const Navbar = () => {
  const isBrowser = typeof window !== "undefined" ? window.innerWidth : 350;
  const [windowWidth, setWindowWidth] = useState(350);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth < 768) {
    return null;
  }

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <StyledBtn href="/contact">CONTACT US</StyledBtn>
    </StyledNav>
  );
};

export default Navbar;
