import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import "@fontsource/exo";
import "@fontsource/exo/200.css";
import "@fontsource/exo/400.css";
import "@fontsource/exo/800.css";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

html {
  position: fixed;
  height: 100%;
  overflow: hidden;
}

body {
  font-family: 'Exo', sans-serif;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: black;
}
`;
const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100vh;
  z-index: 10;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "gradient.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <StyledBackgroundImage Tag="section" fluid={imageData}>
      <GlobalStyle />
      <StyledWrapper>
        <Header />
        {children}
      </StyledWrapper>
    </StyledBackgroundImage>
  );
};

export default Layout;
