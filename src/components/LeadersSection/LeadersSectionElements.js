import { Link } from "react-router-dom";
import styled from "styled-components";

export const LeadersSectionWrapper = styled.section`
  margin-bottom: 20rem;
`;
export const LeadersSectionInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 11vw;

  @media screen and (min-width: 1440px) {
    column-gap: 170px;
  }
  @media screen and (max-width: 930px) {
    display: block;
  }
`;

export const LeadersSectionCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media screen and (max-width: 410px) {
    grid-template-columns: 1fr;
  }
`;

export const LeadersSectionCardInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);

  @media screen and (max-width: 930px) {
    display: none;
  }
`;

export const LeadersSectionCardWrapper = styled.div``;

export const LeadersSectionImgWrapper = styled.div`
  position: relative;
  &:hover ${LeadersSectionCardInnerWrapper} {
    opacity: 1;
  }
`;
export const LeadersSectionSocialLink = styled(Link)``;

export const LeadersSectionCardLeaderName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
`;
export const LeadersSectionCardLeaderRole = styled.p`
  margin-bottom: 1.5rem;
`;
export const LeadersSectionCardTextWrapper = styled.div`
  margin-top: 2rem;
`;
export const LeadersSectionCardSocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  display: none;

  @media screen and (max-width: 930px) {
    display: flex;
  }
`;
