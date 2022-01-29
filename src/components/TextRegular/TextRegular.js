import { motion } from "framer-motion";
import styled from "styled-components";

export const TextRegularEl = styled(motion.p)`
  color: var(--color-darkgrey);
  color: ${({ $textWhite }) => ($textWhite ? "var(--color-white)" : "")};
  line-height: 1.6;
  margin-bottom: 3rem;
`;
