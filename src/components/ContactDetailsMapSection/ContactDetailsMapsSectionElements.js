import styled from "styled-components";

export const ContactDetailsMapSectionWrapper = styled.section`
  margin-bottom: 13rem;
`;
export const ContactDetailsMapSectionMapWrapper = styled.div`
  height: 56rem;
  width: 100%;
  scroll-margin-top: 4rem;
`;

export const ContactDetailsMapSectionPopupTitle = styled.h5``;

export const ContactDetailsMapSectionOffices = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 11vw;
  margin-bottom: 20rem;

  @media screen and (min-width: 1440px) {
    column-gap: 160px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ContactDetailsMapSectionOfficesCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media screen and (max-width: 1360px) {
    grid-template-columns: 1fr;
  }
`;
export const ContactDetailsMapSectionOfficesCol = styled.div`
  position: relative;
`;
export const ContactDetailsMapSectionOfficeName = styled.h5`
  margin-bottom: 3rem;
`;
export const ContactDetailsMapSectionOfficeRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  column-gap: 20px;
`;
export const ContactDetailsMapSectionOfficeParagraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
`;
export const ContactDetailsMapSectionOfficeMapLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 3rem;
  font-weight: 700;
  color: var(--color-dark);

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(calc(-50% - 3rem));
  }

  @media screen and (max-width: 700px) {
    position: static;
    transform: translateY(0);
  }
`;
export const ContactDetailsMapSectionOfficeMapLinkText = styled.span`
  margin-right: 2rem;
`;
