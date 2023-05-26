import styled from "styled-components";

export const AboutWrapper = styled.main`
  padding: 6rem 1rem;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--white);
  position: relative;
`;

export const AboutHeading = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const AboutP = styled.p`
  text-align: justify;
  width: 80%;
  margin-bottom: 1rem;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    width: 85%;
  }
`;
