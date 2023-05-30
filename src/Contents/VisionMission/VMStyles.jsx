import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const VMPageWrapper = styled.section`
  padding: 5rem 2rem;
  /* min-height: 80vh; */
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  border: 1px solid red;
  @media screen and (max-width: 410px) {
    padding: 4rem 1rem;
  }
`;

export const VMHeading = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const VMCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  @media screen and (max-width: 600px) {
    padding: 2rem 0;
  }
`;

export const VMCard = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  padding: 0.3rem;
  border-radius: 20px;
  border: 1px solid var(--l-gray);
  gap: 2.2rem;
  @media screen and (max-width: 600px) {
    width: 24rem;
    gap: 2rem;
  }
  @media screen and (max-width: 410px) {
    gap: 1.4rem;
    width: 20rem;
  }
  h3 {
    text-align: center;
    min-width: 40%;
    font-size: 24px;
    font-weight: 400;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
    @media screen and (max-width: 410px) {
      min-width: 28%;
    }
  }
  span {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
`;

export const VMImage = styled.img`
  min-width: 10rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 600px) {
    min-width: 8rem;
    width: 8rem;
    height: 8rem;
  }
`;

export const VMButton = styled(MdOutlineArrowForwardIos)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 1rem;
  border-radius: 50%;
  border: 1px solid var(--l-gray);
  padding: 0.8rem;
  padding-left: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: var(--l-gray);
  }
  @media screen and (max-width: 600px) {
    padding: 0.2rem;
    font-size: 2rem;
  }
`;

export const VMModalWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;

export const VMModal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 20px;
    text-align: justify;
    max-width: 60%;
    @media screen and (max-width: 1100px) {
      max-width: 80%;
    }
    @media screen and (max-width: 650px) {
      max-width: 90%;
      font-size: 16px;
    }
  }
`;
