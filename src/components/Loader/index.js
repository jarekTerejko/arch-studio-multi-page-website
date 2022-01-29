import React from "react";
import { LoaderCircle, LoaderWrapper } from "./LoaderElements";
import { AnimatePresence } from "framer-motion";

const Loader = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <LoaderWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <LoaderCircle />
      </LoaderWrapper>
    </AnimatePresence>
  );
};

export default Loader;
