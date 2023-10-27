import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import TestimonialCard from "./TestimonialCard";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SimpleCarousel = () => {
  return (
    <div>
      <h1>SimpleCarousel</h1>
      <Carousel itemsToShow={2}>
        <TestimonialCard
          name="Alexandru Neata"
          text="Cu tovarasi in masina si cu basi in portbagaj,
                Ne remarci repede in peisaj,
                Plutim usor parca e un miraj;
                Senzatie majora cu 40 la ora."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairTheCaesar",
            accessoriesType: "Blank",
            hairColor: "Blonde",
            facialHairType: "Blank",
            clotheType: "ShirtVNeck",
            clotheColor: "Black",
            eyeType: "Wink",
            eyebrowType: "Default",
            mouthType: "Smile",
            skinColor: "Light",
          }}
        />
        <TestimonialCard
          name="Alexandru Neata"
          text="Cu tovarasi in masina si cu basi in portbagaj,
                Ne remarci repede in peisaj,
                Plutim usor parca e un miraj;
                Senzatie majora cu 40 la ora."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairTheCaesar",
            accessoriesType: "Blank",
            hairColor: "Blonde",
            facialHairType: "Blank",
            clotheType: "ShirtVNeck",
            clotheColor: "Black",
            eyeType: "Wink",
            eyebrowType: "Default",
            mouthType: "Smile",
            skinColor: "Light",
          }}
        />
        <TestimonialCard
          name="Alexandru Neata"
          text="Cu tovarasi in masina si cu basi in portbagaj,
                Ne remarci repede in peisaj,
                Plutim usor parca e un miraj;
                Senzatie majora cu 40 la ora."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairTheCaesar",
            accessoriesType: "Blank",
            hairColor: "Blonde",
            facialHairType: "Blank",
            clotheType: "ShirtVNeck",
            clotheColor: "Black",
            eyeType: "Wink",
            eyebrowType: "Default",
            mouthType: "Smile",
            skinColor: "Light",
          }}
        />
        <TestimonialCard
          name="Alexandru Neata"
          text="Cu tovarasi in masina si cu basi in portbagaj,
                Ne remarci repede in peisaj,
                Plutim usor parca e un miraj;
                Senzatie majora cu 40 la ora."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairTheCaesar",
            accessoriesType: "Blank",
            hairColor: "Blonde",
            facialHairType: "Blank",
            clotheType: "ShirtVNeck",
            clotheColor: "Black",
            eyeType: "Wink",
            eyebrowType: "Default",
            mouthType: "Smile",
            skinColor: "Light",
          }}
        />
        <TestimonialCard
          name="Alexandru Neata"
          text="Cu tovarasi in masina si cu basi in portbagaj,
                Ne remarci repede in peisaj,
                Plutim usor parca e un miraj;
                Senzatie majora cu 40 la ora."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairTheCaesar",
            accessoriesType: "Blank",
            hairColor: "Blonde",
            facialHairType: "Blank",
            clotheType: "ShirtVNeck",
            clotheColor: "Black",
            eyeType: "Wink",
            eyebrowType: "Default",
            mouthType: "Smile",
            skinColor: "Light",
          }}
        />
        <TestimonialCard
          name="Alexandru Neata"
          text="Cu tovarasi in masina si cu basi in portbagaj,
                Ne remarci repede in peisaj,
                Plutim usor parca e un miraj;
                Senzatie majora cu 40 la ora."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairTheCaesar",
            accessoriesType: "Blank",
            hairColor: "Blonde",
            facialHairType: "Blank",
            clotheType: "ShirtVNeck",
            clotheColor: "Black",
            eyeType: "Wink",
            eyebrowType: "Default",
            mouthType: "Smile",
            skinColor: "Light",
          }}
        />
      </Carousel>
    </div>
  );
};

export default SimpleCarousel;
