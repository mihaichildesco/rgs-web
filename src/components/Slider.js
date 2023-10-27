import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import TestimonialCard from "./TestimonialCard";

const Slider = () => {
  return (
    <div className="container">
      <div className="heading"></div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
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

        <div className="slider-controler">
          <div className="slider-arrow swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
