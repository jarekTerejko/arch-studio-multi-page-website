import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePageFeaturedWrapper = styled.section`
  margin-bottom: 20rem;
`;
export const HomePageFeaturedInnerWrapper = styled.div``;

export const HomePageFeaturedHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const HomePageFeaturedGallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 30px;
  padding-top: 7rem;

  @media screen and (max-width: 700px) {
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

export const HomePageGalleryItem = styled(motion.div)`
  background-image: ${({ $bgImgDesktop }) =>
    $bgImgDesktop
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.1)),url(${$bgImgDesktop})`
      : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.1))"};
  background-position: center;
  background-size: cover;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: 768px) {
    background-image: ${({ $bgImgTablet }) =>
      $bgImgTablet
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.1)),url(${$bgImgTablet})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.1))"};
    min-height: 240px;
  }

  @media screen and (max-width: 375px) {
    background-image: ${({ $bgImgMobile }) =>
      $bgImgMobile
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.1)),url(${$bgImgMobile})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.1))"};
  }
`;

export const HomePageGalleryLink = styled(Link)`
  text-transform: capitalize;
  color: var(--color-white);
  font-size: 1.4rem;
`;

export const HomePageGalleryTitle = styled.h5`
  color: var(--color-white);
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

export const HomePageGalleryImgSubtitle = styled.h5``;

export const HomePageGalleryImgCounter = styled.span`
  position: absolute;
  right: -20px;
  top: 20px;
  font-size: 18rem;
  color: rgb(238 239 244 / 40%);
  font-weight: 700;

  @media screen and (max-width: 768px) {
    right: 0;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const HomePageGalleryBtnWrapper = styled.div`
  @media screen and (max-width: 700px) {
    display: ${({ hideTabletMobile }) => (hideTabletMobile ? "none" : "")};
  }

  @media screen and (max-width: 700px) {
    display: ${({ showTabletMobile }) => (showTabletMobile ? "block" : "")};
    text-align: center;
  }

  @media screen and (min-width: 700px) {
    display: ${({ showTabletMobile }) => (showTabletMobile ? "none" : "")};
  }
`;
