import styled from "styled-components";

export const ContainerEl = styled.div`
  margin: 0 auto;
  max-width: 144rem;
  padding: 0 16.5rem;

  @media screen and (max-width: 1000px) {
    padding: 0 10rem;
  }
  
  @media screen and (max-width: 560px) {
    padding: ${(props) => (props.fullWithMobile ? "0" : "0 2rem")};
  }
`;
