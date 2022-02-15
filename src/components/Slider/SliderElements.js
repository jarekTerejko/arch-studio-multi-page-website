import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrapper = styled.section`
  margin-bottom: 20rem;

  @media screen and (max-width: 375px) {
    padding-bottom: 6rem;
    margin-bottom: 15rem;
  }
`;

export const SliderContent = styled.div`
  position: relative;
`;

export const SliderContentInnerWrapper = styled(motion.div)`
  background-image: ${({ $bgImgDesktop }) =>
    $bgImgDesktop
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6)),url(${$bgImgDesktop})`
      : "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6))"};
  background-position: center;
  background-size: cover;
  min-height: 72rem;

  @media screen and (max-width: 768px) {
    background-image: ${({ $bgImgTablet }) =>
      $bgImgTablet
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.7)),url(${$bgImgTablet})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6))"};
  }

  @media screen and (max-width: 375px) {
    background-image: ${({ $bgImgMobile }) =>
      $bgImgMobile
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.7)),url(${$bgImgMobile})`
        : "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0,0,0, 0.6))"};
    min-height: 56rem;
  }
`;

export const SliderTextWrapper = styled.div`
  position: absolute;
  max-width: 45rem;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20rem;

  @media screen and (max-width: 1440px) {
    margin-left: 14vw;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  @media screen and (max-width: 375px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

export const SliderMainBtnWrapper = styled(motion.div)``;

export const SliderHeading = styled(motion.h2)`
  color: var(--color-white);
  font-size: 7rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 3.6rem;
  }
`;

export const SliderNav = styled.nav``;

export const SliderBtnsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: -80px;

  @media screen and (max-width: 1000px) {
    left: 0;
  }

  @media screen and (max-width: 375px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: -60px;
    display: flex;
  }
`;

export const SliderBtn = styled.button`
  border: none;
  color: var(--color-darkgrey);
  background: var(--color-white);
  width: 8rem;
  height: 8rem;
  line-height: 80px;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  transition: var(--transition);

  @media screen and (max-width: 375px) {
    width: 6rem;
    height: 6rem;
    line-height: 60px;
  }

  &:hover {
    background: var(--color-grey);
  }

  &.active {
    background: var(--color-dark);
    color: var(--color-white);
  }
`;
