import React from "react";
import styled from "styled-components";
import Avatar from "avataaars";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 380px;
  height: 250px;
  background: linear-gradient(
    180deg,
    #003156 0%,
    #1c1c1c 99.97%,
    #1c1c1c 99.98%,
    #1c1c1c 99.99%
  );
  border-radius: 10px;

  span {
    color: #239bf7;
    padding-top: 10px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    width: 90%;
    margin: 15px 20px;
  }

  p {
    width: 80%;
    margin: 20px auto;
    font-style: italic;
    margin-bottom: 40px;
  }
`;

const TestimonialCard = ({ name, text, AvatarProps }) => {
  return (
    <Wrapper>
      {/* <img src={image} alt={name} /> */}
      <div>
        <Avatar {...AvatarProps} />
        <section>
          <h3>{name}</h3>
          <span>CEO lorem</span>
        </section>
      </div>
      <p>{text}</p>
    </Wrapper>
  );
};

export default TestimonialCard;
