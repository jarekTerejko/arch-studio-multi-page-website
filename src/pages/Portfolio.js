import { motion } from "framer-motion";
import { ContainerEl } from "../components/Container/ContainerElement";
import Loader from "../components/Loader";
import PortfolioGallery from "../components/PortfolioGallery";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useFetch from "../useFetch";

const Portfolio = ({ containerVariants }) => {
  const { data, isLoading, fetchErrorValue } = useFetch("../data.json");

  return (
    <>
      <ScrollToTop />
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? (
        <ContainerEl>
          <h1>{fetchErrorValue}</h1>
        </ContainerEl>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <PortfolioGallery data={data[0].portfolioData} />
        </motion.div>
      )}
    </>
  );
};

export default Portfolio;
