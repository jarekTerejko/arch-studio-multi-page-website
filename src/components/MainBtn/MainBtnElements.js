import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainBtnEl = styled(Link)`
  background: var(--color-dark);
  display: inline-flex;
  align-items: center;
  color: var(--color-white);
  padding: 2.7rem 3rem;
`;

export const MainBtnText = styled.span`
  margin-right: 2rem;
  margin-right: ${({isText})=> isText ? "2rem" : 0 };
  text-transform: capitalize;
`;
