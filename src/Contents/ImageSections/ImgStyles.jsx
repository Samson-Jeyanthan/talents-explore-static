import styled from "styled-components";

export const ImgSectionWrapper = styled.main`
  min-height: 100vh;
  background: var(--l-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

// styles for section one image

export const ImagesWrapperOne = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80vh;

  @media screen and (max-width: 900px) {
    height: 80vh;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export const ImgWrapperOne = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 600px;

  @media screen and (max-width: 600px) {
    width: 70%;
    margin-right: 2rem;
  }
`;

export const SectionOneMainImg = styled.img`
  width: 35rem;
  height: 60vh;
  border-radius: 20px;
  object-fit: cover;
  -o-object-fit: cover;
  z-index: 1;

  @media screen and (max-width: 900px) {
    width: 25rem;
    height: 50vh;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 45vh;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 35vh;
  }
`;

export const SectionOneSubImg = styled.img`
  width: 15rem;
  height: 40vh;
  border-radius: 20px;
  object-fit: cover;
  -o-object-fit: cover;
  position: absolute;
  bottom: -15%;
  right: -15%;
  z-index: 2;

  @media screen and (max-width: 900px) {
    width: 12rem;
    height: 30vh;
  }
  @media screen and (max-width: 500px) {
    width: 10rem;
    height: 20vh;
  }
`;

export const SectionOneTeritoryImg = styled.img`
  width: 10rem;
  height: 30vh;
  border-radius: 20px;
  object-fit: cover;
  -o-object-fit: cover;
  position: absolute;
  top: -15%;
  right: -20%;
  z-index: 0;

  @media screen and (max-width: 900px) {
    width: 9rem;
    height: 20vh;
  }
  @media screen and (max-width: 500px) {
    width: 7rem;
    height: 15vh;
  }
`;

export const ImgSectionOneContent = styled.h1`
  width: 50%;
  font-size: 50px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 1320px) {
    font-size: 44px;
    width: 600px;
    margin-left: 1rem;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    height: 30vh;
    padding: 1rem 0;
    align-items: flex-start;
  }
  @media screen and (max-width: 500px) {
    font-size: 36px;
    margin-bottom: 5rem;
  }
`;
