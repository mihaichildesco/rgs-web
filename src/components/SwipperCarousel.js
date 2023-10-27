import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import TestimonialCard from "./TestimonialCard";

const SwiperContainer = styled(Swiper)`
  color: #fff;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

export default function SwipperCarousel({ slides }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const viewPort = windowWidth < 768 ? 1 : 3;

  return (
    <SwiperContainer
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={viewPort}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      rewind={true}
      effect="coverflow"
    >
      {/* {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))} */}

      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          name="Robert Gealapu"
          text="Daca va dau serverele mele v-o ia corpu' razna!!!"
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairShortWaved",
            accessoriesType: "Prescription01",
            hairColor: "BrownDark",
            facialHairType: "BeardLight",
            facialHairColor: "BrownDark",
            clotheType: "BlazerShirt",
            eyeType: "Default",
            eyebrowType: "Default",
            mouthType: "Default",
            skinColor: "Light",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          name="Sergiu Strat"
          text="Sunteti varzaaa !! Urascu omu' prost cum urasc mancarea de post.Platiti alt firma sa va zambeasca contra-cost."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "LongHairBun",
            accessoriesType: "Blank",
            hairColor: "BrownDark",
            facialHairType: "BeardLight",
            facialHairColor: "Black",
            clotheType: "CollarSweater",
            clotheColor: "Black",
            eyeType: "Default",
            eyebrowType: "Angry",
            mouthType: "Default",
            skinColor: "Brown",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          name="Robert Gealapu"
          text="Daca va dau serverele mele v-o ia corpu' razna!!!"
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "ShortHairShortWaved",
            accessoriesType: "Prescription01",
            hairColor: "BrownDark",
            facialHairType: "BeardLight",
            facialHairColor: "BrownDark",
            clotheType: "BlazerShirt",
            eyeType: "Default",
            eyebrowType: "Default",
            mouthType: "Default",
            skinColor: "Light",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          name="Sergiu Strat"
          text="Sunteti varzaaa !! Urascu omu' prost cum urasc mancarea de post.Platiti alt firma sa va zambeasca contra-cost."
          AvatarProps={{
            style: { width: "100px", height: "100px" },
            avatarStyle: "Circle",
            topType: "LongHairBun",
            accessoriesType: "Blank",
            hairColor: "BrownDark",
            facialHairType: "BeardLight",
            facialHairColor: "Black",
            clotheType: "CollarSweater",
            clotheColor: "Black",
            eyeType: "Default",
            eyebrowType: "Angry",
            mouthType: "Default",
            skinColor: "Brown",
          }}
        />
      </SwiperSlide>
    </SwiperContainer>
  );
}
