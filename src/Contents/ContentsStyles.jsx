import styled from "styled-components";
import { VscDebugBreakpointData } from "react-icons/vsc";

// terms and conditions, Privacy policy styless, community guidelines content styles

export const PointsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5rem;
  display: flex;
  gap: 0.5rem;
  font-size: 16px;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 600px) {
    margin-left: 1rem;
    font-size: 14px;
  }
`;

export const PointsIcon = styled(VscDebugBreakpointData)`
  min-width: 1rem;
  min-height: 1rem;
  margin-top: 0.3rem;
`;

export const Parah = styled.p`
  margin-bottom: 1rem;
  font-size: 16px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--l-gray);
  border-top: 1px solid var(--l-gray);
  padding: 1rem 0;
  @media screen and (max-width: 600px) {
    font-size: 18px;
    text-align: start;
  }
`;

export const ThirdTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    text-align: start;
  }
`;
