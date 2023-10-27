import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Svgtest from "../images/main-photo1.svg";
import HeaderSection from "../components/HeaderSection";

const StyledPhoto = styled.img`
  background: transparent;
  margin: 0px auto;
  display: block;
  width: 322px;
  @media (min-width: 768px) {
    width: 728px;
  }
`;

const HeroSection = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 130px;
    margin-top: 127px;
  }
`;

const ServicesPage = () => {
  return (
    <Layout>
      <HeroSection>
        <StyledPhoto src={Svgtest} alt="main foto" />
        <HeaderSection
          smallTitle="Our services and products"
          bigTitle="bosch car service"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis lorem sapien. Quisque sit amet purus in ex laoreet gravida. Vivamus convallis quam ut sem elementum tincidunt. "
        />
      </HeroSection>
      <Services />
      <ContactUs />
    </Layout>
  );
};

export default ServicesPage;
