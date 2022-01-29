import { AnimatePresence } from "framer-motion";
import { NotFoundHeading, NotFoundLink, NotFoundWrapper } from "./NotFoundElements";

const NotFound = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <NotFoundWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <NotFoundHeading>404 This page could not be found</NotFoundHeading>
        <NotFoundLink to="/">Home</NotFoundLink>
      </NotFoundWrapper>
    </AnimatePresence>
  );
};

export default NotFound;
