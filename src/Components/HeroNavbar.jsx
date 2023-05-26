import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";

const Nav = styled.nav`
  padding: 1rem 2rem;
  background: ${({ scrollnav }) =>
    scrollnav
      ? "var(--white)"
      : "linear-gradient(90deg, rgba(0, 0, 0, 0.0) 60%, rgba(0, 0, 0) 100%)"};
  position: sticky;
  top: 0;
  margin-top: -80px;
  z-index: 10;
`;

const NavLink = styled(LinkS)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: ${({ scrollnav }) => (scrollnav ? "var(--black)" : "var(--white)")};
`;

const HeroNavbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollnav={scrollNav ? "true" : undefined}>
      <NavLink to="/" scrollnav={scrollNav ? "true" : undefined}>
        Talents Explore
      </NavLink>
    </Nav>
  );
};

export default HeroNavbar;
