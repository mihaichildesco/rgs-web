import React from "react";
import styled from "styled-components";
import "@fontsource/exo/800.css";

const Wrapper = styled.div`
  h1 {
    font-size: 48px;
    color: #ffffff;
    font-weight: 800;
    @media (min-width: 768px) {
      font-size: 64px;
    }
  }
  @media (min-width: 768px) {
  }
`;

const SectionHeader = ({ text, blueWord, secondBlueWord, paragraph }) => {
  const words = text.split(" ");

  return (
    <Wrapper>
      <h1>
        {words.map((word, index) => {
          if (word.toLowerCase() === blueWord.toLowerCase()) {
            return (
              <span key={index} style={{ color: "#239BF7" }}>
                {word}{" "}
              </span>
            );
          } else if (word.toLowerCase() === secondBlueWord.toLowerCase()) {
            return (
              <span key={index} style={{ color: "#239BF7" }}>
                {word}{" "}
              </span>
            );
          } else {
            return <span key={index}>{word} </span>;
          }
        })}
      </h1>
      <p>{paragraph}</p>
    </Wrapper>
  );
};

export default SectionHeader;
