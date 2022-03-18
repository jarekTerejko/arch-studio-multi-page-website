import { AnimatePresence } from "framer-motion";
import {
  NotFoundHeading,
  NotFoundLink,
  NotFoundWrapper,
} from "./NotFoundElements";

const NotFound = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <NotFoundWrapper>
        <NotFoundHeading>404 This page could not be found</NotFoundHeading>
        <NotFoundLink to="/">Home</NotFoundLink>
      </NotFoundWrapper>
    </AnimatePresence>
  );
};

export default NotFound;
