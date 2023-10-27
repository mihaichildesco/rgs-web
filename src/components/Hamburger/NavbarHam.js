import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const NavbarHam = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default NavbarHam;
