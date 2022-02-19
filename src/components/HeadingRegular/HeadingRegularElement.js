import styled from "styled-components";

export const HeadingRegularEl = styled.h2`
  font-size: 5rem;
  margin-bottom: 4rem;
  color: ${({ textWhite }) => (textWhite ? "var(--color-white)" : "")};
  max-width: ${({ headingContactForm }) => (headingContactForm ? "23rem" : "")};

  @media screen and (max-width: 768px) {
    max-width: ${({ headingContactForm }) =>
      headingContactForm ? "unset" : ""};
  }

  @media screen and (max-width: 560px) {
    font-size: 3rem;
  }
`;
