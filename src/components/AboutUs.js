import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import ButtonGradient from "./ButtonGradient";
import ButtonArrow from "./ButtonArrow";
import CloudPhoto from "../images/cloud-2.png";
import SwipperCarousel from "./SwipperCarousel";
import slides from "../mockup.json";
import SectionHeader from "./SectionHeader";
import SmallPageHeading from "./SmallPageHeading";
import SimpleCarousel from "./SimpleCarousel";

const StyledWrapperGradientButtons = styled.div`
  margin-bottom: 60px;
`;

const StyledButtonArrow = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: end;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    margin-left: 30px;
    text-align: center;
  }
`;

const StyledPhoto = styled.img`
  background: transparent;
  margin: 0px auto;
  display: block;
  width: 322px;
  @media (min-width: 768px) {
    align-self: center;
    width: 447px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  p {
    font-family: "Exo", sans-serif;
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    color: #f5f5f5;
    line-height: 30px;
    text-align: left;
    margin-top: 19px;

    @media (min-width: 768px) {
      text-align: left;
      width: 600px;
    }
  }
`;

const MainWrapper = styled.div`
  margin-top: 60px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 110px;
    padding: 50px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
  }
`;

const StyledTitle = styled.div`
  text-align: center;
  h1 {
    font-size: 48px;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 64px;
    }
  }
  span {
    font-size: 52px;
    font-weight: 800;
    color: #239bf7;
    @media (min-width: 768px) {
      font-size: 72px;
    }
  }
`;

const StyledWrapper = styled.div`
  span {
    margin-left: 15px;
  }
  p {
    margin-left: 15px;
  }
  margin-bottom: 35px;
`;

const AboutUs = () => {
  return (
    <>
      <MainWrapper>
        <Wrapper>
          <StyledWrapper>
            <SmallPageHeading title="About Us" />

            <SectionHeader
              text="Who are we?"
              blueWord="Who"
              secondBlueWord=""
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, ante dignissim congue malesuada, augue ligula lacinia erat, id viverra ligula odio vehicula odio. Fusce enim velit, sollicitudin laoreet metus et, viverra mattis purus. Aliquam sed feugiat est.Cras rutrum volutpat tincidunt. Duis sollicitudin massa sapien, in dapibus ipsum gravida sit amet."
            />
          </StyledWrapper>
          <StyledWrapperGradientButtons>
            <ButtonGradient text="E-Commerce" />
            <ButtonGradient text="iOT & Industrial" />
            <ButtonGradient text="Financial Lorem" />
          </StyledWrapperGradientButtons>

          <StyledButtonArrow>
            <ButtonArrow />
          </StyledButtonArrow>
        </Wrapper>
        <StyledPhoto src={CloudPhoto} alt="main foto" />
      </MainWrapper>

      <TextWrapper>
        <SmallPageHeading title="Testimonials" />
        <StyledTitle>
          <span>What</span>
          <h1>clients say?</h1>
        </StyledTitle>
      </TextWrapper>
      {/* Testimonials -- carusel to be implemented */}
      {/* <SwipperCarousel slides={slides} /> */}
      <SimpleCarousel />
    </>
  );
};

export default AboutUs;
