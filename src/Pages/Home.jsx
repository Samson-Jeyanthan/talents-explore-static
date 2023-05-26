import React from "react";
import { About, Hero, ImgSection1, PolicyCenter, VM } from "../Contents";
import { HeroNavbar } from "../Components";
const Home = () => {
  return (
    <>
      <HeroNavbar />
      <Hero />
      <About />
      <ImgSection1 />
      <VM />
      <PolicyCenter />
    </>
  );
};

export default Home;
