import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 5.6rem 0;

  @media screen and (max-width: 560px) {
    padding: 3rem 0;
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  z-index: 1;

  @media screen and (max-width: 730px) {
    justify-content: space-between;
  }
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

  @media screen and (max-width: 730px) {
    display: flex;
  }
`;

export const NavbarNavItems = styled.ul`
  margin-left: 7rem;
  display: flex;
  align-items: center;
  list-style: none;
  transition: var(--transition);

  @media screen and (max-width: 1000px) {
    margin-left: 4rem;
  }

  @media screen and (max-width: 730px) {
    position: absolute;
    left: 0;
    top: 96px;
    margin-left: 0;
    flex-direction: column;
    z-index: 0;
    background: var(--color-white);
    width: calc(100% - 200px);
    width: 100%;
    padding: 1.5rem;
    transform: ${(props) =>
      props.isOpen ? `translateX(0)` : "translateX(-130%)"};
  }

  @media screen and (max-width: 560px) {
    top: 70px;
  }
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
  position: absolute;
  left: -82.5px;
  top: 0px;
  letter-spacing: 12px;
  transform-origin: left;
  transform: rotate(90deg);
  line-height: 16px;
  padding-left: 86px;
  text-transform: uppercase;

  @media screen and (max-width: 1000px) {
    left: -50px;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    background: var(--color-grey);
    width: 96px;
    top: 6px;
    left: -64px;
  }
`;
