import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-dark);
`;

export const LoaderCircle = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: var(--color-white) transparent var(--color-white) transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
