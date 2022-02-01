import styled from "styled-components";
import { HomepageHeroTextWrapper } from "../HomePageHero/HomePageHeroElements";

export const HomePageBannerWrapper = styled.section`
  margin-bottom: 20rem;
  @media screen and (max-width: 560px) {
    margin-bottom: 7rem;
  }
`;
export const HomePageBannerInnerWrapper = styled.div`
  background-image: ${({ $bgImgDesktop }) =>
    $bgImgDesktop
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6)),url(${$bgImgDesktop})`
      : "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6))"};
  background-position: center;
  background-size: cover;
  min-height: 560px;

  @media screen and (max-width: 768px) {
    background-image: ${({ $bgImgTablet }) =>
      $bgImgTablet
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6)),url(${$bgImgTablet})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6))"};
  }
  @media screen and (max-width: 375px) {
    background-image: ${({ $bgImgMobile }) =>
      $bgImgMobile
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6)),url(${$bgImgMobile})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6))"};
  }
`;
export const HomePageBannerTextWrapper = styled(HomepageHeroTextWrapper)`
  height: 100%;
  min-height: 560px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 40rem;

  @media screen and (max-width: 768px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  @media screen and (max-width: 560px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
