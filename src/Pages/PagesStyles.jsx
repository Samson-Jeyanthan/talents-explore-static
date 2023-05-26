import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export const PagesWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1rem; */
  background: var(--white);
`;

export const HomeHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

// Terms and conditions, Privacy Policy Styles, community guide lines top section

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  background: var(--white);
  gap: 1rem;
  @media screen and (max-width: 600px) {
    padding: 0.2rem;
    border: 1px solid red;
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Paragraph = styled.p`
  width: 75%;
  margin-bottom: 0.5rem;
  text-align: justify;
  /* border: 1px solid red; */
`;

export const Question = styled.h1`
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--l-gray);

  &:hover {
    background: var(--l-gray);
  }
  ${({ isActive }) =>
    isActive &&
    `
    background: var(--l-gray);
  `}
  @media screen and (max-width: 600px) {
    font-size: 20px;
    padding: 0.5rem;
  }
`;

export const QAWrapper = styled.div`
  width: 75%;
  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const PlusButton = styled(BiPlus)`
  font-size: ${({ isActive }) => (isActive ? "2rem" : "1.5rem")};
  min-width: 3rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isActive }) => (isActive ? "rotate(45deg)" : "none")};
`;

export const Answer = styled.div`
  width: 100%;
  text-align: justify;
  padding: 1rem 0.5rem;
`;

export const ParahLink = styled(Link)`
  color: #0d0dffd7;
`;
