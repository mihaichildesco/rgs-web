import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const Header = styled.div`
  color: #fff;
  font-family: "Exo", sans-serif;
  font-style: normal;
  max-width: 360px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    /* margin-left: 38px; */
  }

  h1 {
    font-size: 48px;
    line-height: 60px;
  }

  p {
    font-family: "Exo", sans-serif;
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    color: #f5f5f5;
    line-height: 30px;
    text-align: left;
    margin-top: 19px;
    margin-left: 16px;
    @media (min-width: 768px) {
      margin-left: 0px;
    }
  }

  div {
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      margin: 0;
    }
  }
`;

const SpanTitle = styled.span`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.03em;
  line-height: 31px;
  color: #239bf7;
`;

const HeaderSection = (props) => {
  const { maxWidth, alignItems, margin, color } = props;
  return (
    <Header
      style={{
        maxWidth: `${maxWidth}px`,
        alignItems: `${alignItems}`,
        margin: `${margin}px`,
        color: `${color}`,
      }}
    >
      <SpanTitle>{props.smallTitle}</SpanTitle>
      <SectionHeader
        text="Take Your Business to Higher Grounds"
        blueWord="Business"
        secondBlueWord="Higher"
      />
      <div>
        <p>{props.paragraph}</p>
      </div>
    </Header>
  );
};

export default HeaderSection;
