import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import m1 from "../../Assets/m1.jpg";
import s1 from "../../Assets/s1.jpg";
import t1 from "../../Assets/t1.jpg";
import "./ImgStyles.css";
import { HerSliderWrapper } from "./ImgStyles";

const ImgSection2 = () => {
  return (
    <HerSliderWrapper>
      <HeroSlider
        autoplay
        className="heroSlider"
        settings={{
          shouldAutoplay: true,
          slidingDelay: 50,
        }}
        accessability={{
          orientation: "horizontal",
          shouldDisplayButtons: false,
        }}
      >
        <Slide
          background={{
            backgroundImageSrc: m1,
            backgroundAttachment: "fixed",
            backgroundImageClassName: "bgImgStyle",
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: s1,
            backgroundAttachment: "fixed",
            backgroundImageClassName: "bgImgStyle",
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: t1,
            backgroundAttachment: "fixed",
            backgroundImageClassName: "bgImgStyle",
          }}
        />
      </HeroSlider>
    </HerSliderWrapper>
  );
};

export default ImgSection2;
