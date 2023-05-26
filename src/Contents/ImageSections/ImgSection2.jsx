import React, { useState } from "react";
import styled from "styled-components";
import { BGImages } from "../../Data";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

const MainImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  z-index: 2;
`;

const BackImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  position: absolute;
  opacity: 0.5;
  transition: transform 0.3s ease-in-out;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 3;

  &:hover {
    color: #ea3148;
  }
`;

const ImgSection2 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderContainer>
      {BGImages.map((item, index) => (
        <BackImage
          key={index}
          src={item.image}
          alt={`Image ${index}`}
          style={{ transform: `translateX(${(index - currentIndex) * 120}px)` }}
        />
      ))}
      <MainImage src={BGImages[currentIndex]} alt={`Image ${currentIndex}`} />
      <ArrowButton onClick={handlePrevClick}>N</ArrowButton>
      <ArrowButton onClick={handleNextClick}>P</ArrowButton>
    </SliderContainer>
  );
};

export default ImgSection2;
