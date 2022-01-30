import styled from "styled-components";

export const HomePageHeroWrapper = styled.header`
  margin-bottom: 20rem;

  @media screen and (max-width: 375px) {
    margin-bottom: 100px;
  }
`;
export const HomepageHeroInnerWrapper = styled.div`
  position: relative;
  min-height: 56.8rem;

  @media screen and (max-width: 375px) {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -74px;
      height: 2px;
      width: 50px;
      background: var(--color-grey);
    }
  }
`;
export const HomepageHeroTextWrapper = styled.div`
  max-width: 45rem;
  background: var(--color-white);
  margin-left: 20rem;
  padding-top: 7.4rem;

  @media screen and (max-width: 1440px) {
    margin-left: 14vw;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
    padding-top: 0;
  }
`;

export const HomePageHeroLargeHeading = styled.h3`
  font-size: 19.2rem;
  font-weight: 700;
  color: var(--color-grey);
  position: absolute;
  left: 0;
  top: -106px;

  @media screen and (max-width: 1440px) {
    font-size: 13vw;
  }
  
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const HomepageHeroBgImg = styled.div`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : "")};
  min-height: 56.8rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 350px;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
