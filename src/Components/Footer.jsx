import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--l-gray);
  padding: 1.2rem;
`;

const FooterMenu = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  min-width: 80%;
  p {
    font-size: 13px;
    color: var(--black);
  }
`;

const FooterItems = styled(Link)`
  text-decoration: none;
  color: var(--black);
  font-size: 13px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMenu>
        <p>© {new Date().getFullYear()} Talents Explore</p>
        <FooterItems to="/community-guidelines">
          {" "}
          Community Guidelines{" "}
        </FooterItems>
        <FooterItems to="privacy-policy"> Privacy Policy</FooterItems>
        <FooterItems to="terms-and-conditions"> Terms</FooterItems>
        <FooterItems to="cookies-policy">Cookies Policy</FooterItems>
      </FooterMenu>
    </FooterWrapper>
  );
};

export default Footer;
