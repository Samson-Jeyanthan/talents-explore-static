import React from "react";
import {
  ImgSectionWrapper,
  ImgWrapperOne,
  ImgSectionOneContent,
  SectionOneMainImg,
  SectionOneSubImg,
  SectionOneTeritoryImg,
  ImagesWrapperOne,
} from "./ImgStyles";
import MainImg from "../../Assets/m1.jpg";
import SubImg from "../../Assets/s1.jpg";
import TerImg from "../../Assets/t1.jpg";
import { ScrollButton } from "../../Components/CommonStyle";
import { HiOutlineChevronDown } from "react-icons/hi";

const ImgSection1 = () => {
  return (
    <ImgSectionWrapper>
      <ImagesWrapperOne>
        <ImgWrapperOne>
          <SectionOneMainImg src={MainImg} alt="main_image" />
          <SectionOneSubImg src={SubImg} alt="sub_img" />
          <SectionOneTeritoryImg src={TerImg} alt="teritory_img" />
        </ImgWrapperOne>
      </ImagesWrapperOne>
      <ImgSectionOneContent>
        Unleashing Potential & Fostering Connections
      </ImgSectionOneContent>
      <ScrollButton smooth={true} duration={500} to="vm" mode="light">
        Strategic
        <HiOutlineChevronDown />
      </ScrollButton>
    </ImgSectionWrapper>
  );
};

export default ImgSection1;
