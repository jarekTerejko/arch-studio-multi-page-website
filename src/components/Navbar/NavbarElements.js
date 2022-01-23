import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 5.6rem 0;
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const NavbarSiteLinkR = styled(Link)``;

export const NavbarMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 670px) {
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  margin-left: 7rem;
  display: flex;
  align-items: center;
  list-style: none;
  transition: var(--transition);
`;

export const NavbarNavItem = styled.li`
  margin: 0 1.7rem;
`;

export const NavbarNavLinkR = styled(NavLink)`
  padding: 1rem;
  text-transform: capitalize;
  color: var(--color-dark);
  font-weight: 700;
  transition: var(--transition);

  &:hover {
    color: var(--color-darkgrey);
  }
`;

export const NavbarPageIdentifier = styled.span`
  display: inline-block;
  color: var(--color-grey);
  /* color: var(--color-darkgrey); */
  position: absolute;
  left: -82.5px;
  top: 0px;
  letter-spacing: 12px;
  transform-origin: left;
  transform: rotate(90deg);
  line-height: 16px;
  padding-left: 86px;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    background: var(--color-grey);
    /* background: var(--color-darkgrey); */
    width: 96px;
    top: 6px;
    left: -64px;
  }
`;
