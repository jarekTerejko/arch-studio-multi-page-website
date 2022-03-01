import { ContainerEl } from "../components/Container/ContainerElement";
import Loader from "../components/Loader";
import IntroHeader from "../components/IntroHeader";
import useFetch from "../useFetch";
import ContactSection from "../components/ContactSection";
import ContactDetailsMapSection from "../components/ContactDetailsMapSection";
import { motion } from "framer-motion";

const Contact = ({ containerVariants }) => {
  const { data, isLoading, fetchErrorValue } = useFetch("../data.json");

  return (
    <>
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
          <IntroHeader data={data[0].contactData} />
          <ContactDetailsMapSection
            data={data[0].contactData.sectionDetailsAndMap}
          />
          <ContactSection />
        </motion.div>
      )}
    </>
  );
};

export default Contact;
