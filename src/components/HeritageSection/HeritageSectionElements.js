import styled from "styled-components";

export const HeritageSectionWrapper = styled.section`
  min-height: 56.8rem;
  margin-bottom: 20rem;
`;

export const HeritageSectionInnerWrapper = styled.div`
  position: relative;
`;

export const HeritageSectionTextWrapper = styled.div`
  max-width: 52rem;
  padding-right: 2rem;
  position: relative;
  top: 0;
  left: 0;
  background: var(--color-white);
  z-index: 1;
  min-height: 56.8rem;
  
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

export const HeritageSectionBgImg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-image: ${({ bgImgDesktop }) =>
    bgImgDesktop
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0,0,0, 0.1)),url(${bgImgDesktop})`
      : "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0,0,0, 0.5))"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 56.8rem;
  display: inline-block;
  width: 100%;
  max-width: 54rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
