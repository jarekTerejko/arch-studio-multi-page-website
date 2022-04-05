import styled from "styled-components";

export const ScrollToTopBtnWrapper = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 6rem;
  background: var(--color-dark);
  transition: all var(--transition);
  border: 2px solid var(--color-dark-blue);
  padding: 1rem;
  cursor: pointer;
  z-index: 1000;
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? 0.8 : 0)};

  @media screen and (max-width: 560px) {
    right: 0;
    bottom: 0;
    background: var(--color-red);
  }
`;
