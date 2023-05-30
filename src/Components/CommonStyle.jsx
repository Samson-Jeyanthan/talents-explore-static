import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const ScrollButton = styled(LinkS)`
  background: none;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${({ mode }) =>
    mode ? "1px solid var(--black)" : "1px solid var(--l-gray)"};
  position: absolute;
  z-index: 5;
  bottom: 5%;
  right: 5%;
  color: ${({ mode }) => (mode ? "var(--black)" : "var(--l-gray)")};
  fill: ${({ mode }) => (mode ? "var(--black)" : "var(--l-gray)")};
  font-size: 1rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 5rem;
    height: 5rem;
    bottom: 2%;
    right: 4%;
  }
  @media screen and (max-width: 600px) {
    right: 2%;
  }
`;
