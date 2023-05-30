import React from "react";
import { About, Hero, ImgSection1, ImgSection2, PC, VM } from "../Contents";
import { HeroNavbar } from "../Components";
const Home = () => {
  return (
    <>
      <HeroNavbar />
      <Hero />
      <About />
      <ImgSection1 />
      <VM />
      <ImgSection2 />
      <PC />
    </>
  );
};

export default Home;
