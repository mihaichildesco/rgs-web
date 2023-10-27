import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import Form from "./Form";
import Button from "./Button";
import NetworkPhoto from "../images/cloud.png";
import Line from "../images/Line.png";
import IconGrey from "../images/icon-grey.png";
import SocialIcons from "./SocialIcons";
import Copyright from "./Copyright";
import SmallPageHeading from "./SmallPageHeading";
import SectionHeader from "./SectionHeader";

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 1300px;
    display: flex;
    flex-direction: column;
    margin-top: 137px;
  }
`;

const StyledPhoto = styled.img`
  background: transparent;
  margin: 0px auto;
  display: block;
  width: 320px;
  @media (min-width: 768px) {
    width: 492px;
    height: 393px;
  }
`;

const StyledWrapperButton = styled.div`
  margin-bottom: 90px;
`;

const StyledLine = styled.img`
  margin-top: 44px;
  @media (min-width: 768px) {
    width: 100%;
    height: 3px;
    margin-top: 100px;
  }
`;

const StyledIcon = styled.img`
  margin: 0px auto;
  display: block;
  margin-top: 60px;
  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  @media (min-width: 768px) {
  }
`;

const SectionFlex = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

const StyledSmallPageHeading = styled.div`
  margin-left: 15px;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const StyledParagraph = styled.p`
  font-family: "Exo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #f5f5f5;
  margin-left: 15px;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
const ContactUs = () => {
  return (
    <Container>
      <StyledSmallPageHeading>
        <SmallPageHeading title="Contact Us" />
      </StyledSmallPageHeading>
      <SectionHeader
        text="Have some questions?"
        blueWord="questions?"
        secondBlueWord=""
      />
      <StyledParagraph>
        Please fill the form below or leave your message on{" "}
        <SmallPageHeading title="office@loremipsum.com" />{" "}
      </StyledParagraph>
      <SectionFlex>
        <FormSection>
          <Form />
          <StyledWrapperButton>
            <Button text="Send" />
          </StyledWrapperButton>
        </FormSection>
        <StyledPhoto src={NetworkPhoto} alt="network" />
      </SectionFlex>
      <StyledLine src={Line} alt="line" />

      <SectionFooter>
        <StyledIcon src={IconGrey} alt="icon" />
        <SocialIcons />
      </SectionFooter>
      <Copyright />
    </Container>
  );
};

export default ContactUs;
