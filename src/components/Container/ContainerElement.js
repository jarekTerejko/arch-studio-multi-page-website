import styled from "styled-components";

export const ContainerEl = styled.div`
  margin: 0 auto;
  max-width: ${(props) => (props.big ? "144rem" : "115rem")};
  padding: ${(props) => (props.big ? "0 16.5rem" : "0 2rem")};
`;
