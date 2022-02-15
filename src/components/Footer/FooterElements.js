import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  max-width: 144rem;
  padding: 0 16.5rem;

  @media screen and (max-width: 1230px) {
    padding: 0;
  }
`;

export const FooterInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-grey);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 125px;
    background: var(--color-white);

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 38rem;
  }
`;

export const FooterLogoWrapper = styled.div`
  padding: 8rem 5rem;
  background: var(--color-dark);

  @media screen and (max-width: 900px) {
    padding: 4.5rem 3rem;
    max-width: 12rem;
  }
  @media screen and (max-width: 768px) {
    transform: translateY(-60px);
  }
`;

export const FooterNavItems = styled.ul`
  list-style: none;
  display: flex;
  background: var(--color-grey);
  margin-left: 4rem;

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: center;
    transform: translateY(-20px);
  }
`;

export const FooterMainBtnWrapper = styled.div`
  position: absolute;
  right: 0px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;
