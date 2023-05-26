import React from "react";
import {
  BGImage,
  BGImageWrapper,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
} from "./HeroStyle";
import { BGImages } from "../../Data";
import { Typewriter } from "react-simple-typewriter";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ScrollButton } from "../../Components/CommonStyle";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <BGImageWrapper>
          {BGImages.map((image, index) => (
            <BGImage src={image.image} key={index} alt="bg-image" />
          ))}
        </BGImageWrapper>
      </HeroBg>
      <HeroContent>
        <HeroH1>We are Talents Explore!</HeroH1>
        <HeroH1>
          <Typewriter
            words={[" Social Networking App.", " Promoter of talents."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </HeroH1>
      </HeroContent>
      <ScrollButton smooth={true} duration={500} to="aboutUs">
        About
        <HiOutlineChevronDown />
      </ScrollButton>
    </HeroContainer>
  );
};

export default Hero;
