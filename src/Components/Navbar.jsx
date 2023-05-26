import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 2px solid var(--l-gray);
  background: var(--white);
`;

const NavLink = styled(LinkS)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  color: var(--black);
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Talents Explore</NavLink>
    </Nav>
  );
};

export default Navbar;
