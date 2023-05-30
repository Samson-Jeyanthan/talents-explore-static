import styled from "styled-components";
import { Link, Link as LinkS } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const PCWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 2rem;
  @media screen and (max-width: 900px) {
    padding: 2rem 0;
  }
`;

export const PCWContentWrapper = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const PCTitle = styled.h2`
  width: 100%;
  font-size: 30px;
  font-weight: 400;
`;

export const PCSubtitle = styled.p`
  font-size: 20px;
  margin-top: -10px;
  padding: 0 0 1rem 0;
  border-bottom: 1px solid var(--gray);
  @media screen and (max-width: 900px) {
    font-size: 18px;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const PCCardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ invert }) => (invert ? "flex-end" : "")};
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const PCCard = styled.div`
  position: relative;
  text-decoration: none;
  color: var(--black);
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const PCCardImage = styled.img`
  min-width: 20rem;
  max-width: 28rem;
  height: 20rem;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    max-width: 80%;
    height: 15rem;
  }
`;

export const PCCardContent = styled(LinkS)`
  position: absolute;
  width: max-content;
  text-decoration: none;
  color: var(--black);
  min-width: 25rem;
  max-width: 35rem;
  bottom: 4rem;
  right: ${({ invert }) => (invert ? "20rem" : "-25rem")};
  background-color: var(--l-gray);
  border-radius: 15px;
  padding: 1rem;
  @media screen and (max-width: 1100px) {
    right: ${({ invert }) => (invert ? "10rem" : "-15rem")};
  }
  @media screen and (max-width: 900px) {
    position: relative;
    right: 0;
    bottom: 0;
  }
  @media screen and (max-width: 680px) {
    max-width: 30rem;
  }
  @media screen and (max-width: 600px) {
    min-width: 0;
    max-width: 23rem;
  }
  @media screen and (max-width: 500px) {
    max-width: 20rem;
  }
`;

export const PCCardTitle = styled.div`
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 36px;
    font-weight: 500;
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
    h2 {
      font-size: 28px;
    }
  }
`;

export const PCCardDesc = styled.p`
  font-size: 16px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const PCArrow = styled(MdOutlineArrowForwardIos)`
  font-size: 2.2rem;
  font-weight: 1rem;
  border-radius: 50%;
  border: 1px solid var(--black);
  padding: 0.5rem;
  cursor: pointer;
`;

export const OtherPCWrapper = styled.section`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const OtherPCCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border: 1px solid var(--gray);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: var(--black);
  text-decoration: none;
  :hover {
    background-color: var(--l-gray);
  }
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

export const OtherPCTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }
  @media screen and (max-width: 900px) {
    height: max-content;
  }
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

export const OtherPcDesc = styled.p`
  font-size: 16px;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
