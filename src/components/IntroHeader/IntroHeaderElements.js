import styled from "styled-components";

export const IntroHeaderWrapper = styled.header`
  margin-bottom: 20rem;

  @media screen and (max-width: 560px) {
    padding: 0 3rem;
  }
`;

export const IntroHeaderInnerWrapper = styled.div`
  position: relative;
`;

export const IntroHeaderImg = styled.div`
  background-image: ${({ bgImgDesktop }) =>
    bgImgDesktop
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5)),url(${bgImgDesktop})`
      : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5))"};
  background-position: left;
  background-repeat: no-repeat;
  min-height: 72rem;
  display: inline-block;
  width: 100%;
  max-width: 63.5rem;

  @media screen and (max-width: 768px) {
    background-image: ${({ bgImgTablet }) =>
      bgImgTablet
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5)),url(${bgImgTablet})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5))"};
  }

  @media screen and (max-width: 375px) {
    background-image: ${({ bgImgMobile }) =>
      bgImgMobile
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5)),url(${bgImgMobile})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5))"};
    min-height: 24rem;
  }
`;

export const IntroHeaderTextWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 5px;
  max-width: 44rem;
  min-height: 50rem;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 700px) {
    padding-left: 5rem;
  }
  @media screen and (max-width: 640px) {
    padding-left: 0;
  }

  @media screen and (max-width: 560px) {
    min-height: unset;
    min-height: unset;
    position: relative;
    padding-top: 5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -185px;
    width: 185px;
    height: 100%;
    background: var(--color-white);

    @media screen and (max-width: 880px) {
      left: -60px;
      width: 60px;
    }

    @media screen and (max-width: 700px) {
      display: none;
    }

    @media screen and (max-width: 560px) {
      display: block;
      top: -50px;
      background: var(--color-white);
      left: 0;
      height: 50px;
      width: 90%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 150px;
    height: 2px;
    width: 50px;
    background: var(--color-grey);

    @media screen and (max-width: 700px) {
      left: 50px;
    }

    @media screen and (max-width: 640px) {
      left: 0;
    }

    @media screen and (max-width: 560px) {
      display: none;
    }
  }
`;

export const IntroHeaderLargeHeading = styled.h3`
  font-size: 19rem;
  font-weight: 700;
  color: var(--color-grey);
  position: absolute;
  right: 0;
  top: 118px;
  z-index: 1;
  text-transform: capitalize;

  @media screen and (max-width: 1150px) {
    font-size: 15rem;
    top: 136px;
  }

  @media screen and (max-width: 880px) {
    font-size: 12rem;
    top: 150px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15vw;
    top: 160px;
  }

  @media screen and (max-width: 560px) {
    display: none;
  }
`;
