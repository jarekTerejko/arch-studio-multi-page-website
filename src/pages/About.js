import { motion } from "framer-motion";
import { ContainerEl } from "../components/Container/ContainerElement";
import HeritageSection from "../components/HeritageSection";
import IntroHeader from "../components/IntroHeader";
import LeadersSection from "../components/LeadersSection";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useFetch from "../useFetch";

const About = ({ containerVariants }) => {
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
          <IntroHeader data={data[0].aboutData} />
          <HeritageSection data={data[0].aboutData.heritage} />
          <LeadersSection data={data[0].aboutData.leaders} />
        </motion.div>
      )}
    </>
  );
};

export default About;
