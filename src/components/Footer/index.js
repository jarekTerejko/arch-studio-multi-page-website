import { ImageEl } from "../Image/ImageElement";
import {
  FooterInnerWrapper,
  FooterLogoWrapper,
  FooterMainBtnWrapper,
  FooterNavItems,
  FooterWrapper,
} from "./FooterElements";
import LogoWhite from "../../images/icons/logo-white.svg";
import {
  NavbarNavItem,
  NavbarNavLinkR,
  NavbarSiteLinkR,
} from "../Navbar/NavbarElements";
import MainBtn from "../MainBtn";

const Footer = () => {
  const paths = [
    { name: "", path: "/" },
    { name: "portfolio", path: "portfolio" },
    { name: "about us", path: "about" },
    { name: "contact", path: "contact" },
  ];
  return (
    <>
      <FooterWrapper>
        <FooterInnerWrapper>
          <FooterLogoWrapper>
            <NavbarSiteLinkR to="/">
              <ImageEl src={LogoWhite} alt="Logo" />
            </NavbarSiteLinkR>
          </FooterLogoWrapper>
          <FooterNavItems>
            {paths.map((link, i) => {
              if (i === 0) {
                return null;
              } else {
                return (
                  <NavbarNavItem key={i}>
                    <NavbarNavLinkR to={link.path}>{link.name}</NavbarNavLinkR>
                  </NavbarNavItem>
                );
              }
            })}
          </FooterNavItems>
          <FooterMainBtnWrapper>
            <MainBtn pathname="portfolio" text="see our portfolio" isText />
          </FooterMainBtnWrapper>
        </FooterInnerWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
