import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  margin-bottom: 20rem;
`;

export const ContactSectionInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 11vw;

  @media screen and (min-width: 1440px) {
    column-gap: 160px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ContactSectionForm = styled.form``;

export const ContactSectionInputRow = styled.div`
  position: relative;
`;

export const ContactSectionInputLabel = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const ContactSectionInputText = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-dark);
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: 700;

  &.error {
    border-bottom: 1px solid var(--color-red);
    color: var(--color-red);
  }

  &::placeholder {
    color: var(--color-grey);
    text-transform: capitalize;
  }
`;

export const ContactSectionInputTextarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 10rem;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  border-bottom: 1px solid var(--color-dark);
  padding: 2rem;
  resize: vertical;

  &.error {
    border-bottom: 1px solid var(--color-red);
    color: var(--color-red);
  }

  &::placeholder {
    color: var(--color-grey);
    text-transform: capitalize;
  }
`;

export const ContactSectionSubmitBtn = styled.button`
  background: var(--color-dark);
  padding: 2.7rem 2.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity var(--transition);

  &:hover {
    opacity: 0.9;
  }
`;

export const ContactSectionErrorMsg = styled.span`
  color: var(--color-red);
  display: block;
  font-size: 1rem;
  position: absolute;
  right: 20px;
  bottom: 1px;
`;
