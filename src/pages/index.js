import * as React from "react";
import Layout from "../components/Layout";
import SmallPageHeading from "../components/SmallPageHeading";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ButtonArrow from "../components/ButtonArrow";
import Svgtest from "../images/main-photo1.svg";
import ContactUs from "../components/ContactUs";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";

const StyledWrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 57px 40px 40px 20px;
`;

const StyledPhoto = styled.img`
  background: transparent;
  margin: 0px auto;
  display: block;
  width: 322px;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 728px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 105px;
    margin-bottom: 256px;
    align-items: center;
    gap: 6.25rem;
  }
`;

// const SectionHeader = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const StyledTitle = styled.div`
  max-width: 410px;
  margin-left: 20px;
  @media (min-width: 768px) {
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledHeroWrapper>
        <div>
          <StyledTitle>
            <SmallPageHeading title="We make things different"></SmallPageHeading>
            <SectionHeader
              text="Technology For Tomorrow"
              blueWord="For"
              secondBlueWord=""
            ></SectionHeader>
          </StyledTitle>
          <StyledWrapperButtons>
            <Button text="work with us" />
            <ButtonArrow />
          </StyledWrapperButtons>
        </div>
        <StyledPhoto src={Svgtest} alt="main foto" />
      </StyledHeroWrapper>
      <Services />
      <AboutUs />
      <ContactUs />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
