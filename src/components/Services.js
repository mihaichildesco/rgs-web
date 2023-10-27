import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import ButtonArrow from "./ButtonArrow";
import CustomContainer from "./CustomContainer";
import SmallPageHeading from "./SmallPageHeading";

const StyledButtonArrow = styled.div`
  width: 300px;
  margin: 0px auto;
  display: flex;
  justify-content: end;
  margin-bottom: 60px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const StyledContainerWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 60px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: none;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Services = () => {
  return (
    <StyledWrapper>
      <Column>
        <SmallPageHeading title="Our services and products"></SmallPageHeading>
        <HeaderSection
          spanText="What"
          bigTitle="We Do"
          paragraph="Empower your business with cutting-edge technology. Our team of expert software developers will work with you to create innovative solutions tailored to your needs. From concept to launch, we're here to bring your vision to life. Let us be your hero in the world of software development. "
        />
        <StyledButtonArrow>
          <ButtonArrow />
        </StyledButtonArrow>
      </Column>
      <StyledContainerWrapper>
        <CustomContainer
          title="Software Development"
          paragraph="Complete software development
          (mobile and web) cycle, from prototype to market launch, including testing and devops expertise."
        />
        <CustomContainer
          title="Tech2Business"
          paragraph="With our MORE THAN CODING
          approach, our experts bridge the gap
          between technology and business,
          optimising our clients performances."
        />
        <CustomContainer
          title="UX/UI Design"
          paragraph="Beautiful user interfaces and unique
          user experiences, tailored to our clients
          specifications."
        />
        <CustomContainer
          title="AI & DATA Science"
          paragraph="Dedicated team of experts focused on
          developing tailored machine learning
          and artificial intelligence algorithms."
        />
      </StyledContainerWrapper>
    </StyledWrapper>
  );
};

export default Services;
