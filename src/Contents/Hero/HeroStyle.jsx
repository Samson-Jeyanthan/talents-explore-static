import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 4rem;
  height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 1%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export const BGImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BGImage = styled.img`
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  @media screen and (max-width: 768px) {
    height: 33.33vh;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-bottom: 8rem;
  }
`;

export const HeroH1 = styled.h1`
  color: var(--white);
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    width: 360px;
    font-size: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;
export const HeroSubtilte = styled.h3`
  margin-top: 4px;
  color: #fff;
  font-size: 38px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const HeroP = styled.p`
  margin-top: 4px;
  color: #fff;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
