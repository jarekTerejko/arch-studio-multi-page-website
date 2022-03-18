import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundWrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-dark);
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const NotFoundHeading = styled.h1`
  margin-bottom: 3rem;
  font-size: 2rem;
  max-width: 50rem;
  text-align: center;
  color: var(--color-white);
`;

export const NotFoundLink = styled(Link)`
  color: var(--color-white);
  font-size: 3rem;
  margin: 3rem 0;
  text-transform: uppercase;
`;
