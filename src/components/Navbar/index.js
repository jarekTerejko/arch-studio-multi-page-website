import React, { useState } from "react";
import { ImageEl } from "../Image/ImageElement";
import {
  NavbarInnerWrapper,
  NavbarMenuBtn,
  NavbarNavItem,
  NavbarNavItems,
  NavbarNavLinkR,
  NavbarPageIdentifier,
  NavbarSiteLinkR,
  NavbarWrapper,
} from "./NavbarElements";
import Logo from "../../images/icons/logo.svg";
import Bars from "../../images/icons/icon-hamburger.svg";
import X from "../../images/icons/icon-close.svg";
import { ContainerEl } from "../Container/ContainerElement";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  const paths = [
    { name: "", path: "/" },
    { name: "portfolio", path: "portfolio" },
    { name: "about us", path: "about" },
    { name: "contact", path: "contact" },
  ];

  const location = useLocation();

  const displayLocation = (pathname) => {
    let location;
    if (pathname === "/") {
      location = "home";
    } else if (pathname === "/about") {
      location = `${pathname.slice(1)} us`;
    } else {
      location = pathname.slice(1);
    }
    return location;
  };

  return (
    <>
      <NavbarWrapper>
        <ContainerEl big>
          <NavbarInnerWrapper>
            <NavbarPageIdentifier>
              {displayLocation(location.pathname)}
            </NavbarPageIdentifier>
            <NavbarSiteLinkR to="/" onClick={closeMenu}>
              <ImageEl src={Logo} alt="Logo" />
            </NavbarSiteLinkR>
            <NavbarNavItems isOpen={isOpen}>
              {paths.map((link, i) => {
                if (i === 0) {
                  return null;
                } else {
                  return (
                    <NavbarNavItem key={i}>
                      <NavbarNavLinkR to={link.path} onClick={closeMenu}>
                        {link.name}
                      </NavbarNavLinkR>
                    </NavbarNavItem>
                  );
                }
              })}
            </NavbarNavItems>
            <NavbarMenuBtn
              onClick={handleMenu}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <ImageEl
                src={isOpen ? X : Bars}
                alt={isOpen ? "Close Menu" : "Open Menu"}
                style={{ maxWidth: "20px" }}
              />
            </NavbarMenuBtn>
          </NavbarInnerWrapper>
        </ContainerEl>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
