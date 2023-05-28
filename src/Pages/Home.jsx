import React from "react";
import {
  About,
  Hero,
  ImgSection1,
  ImgSection2,
  PolicyCenter,
  VM,
} from "../Contents";
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
      <PolicyCenter />
    </>
  );
};

export default Home;
