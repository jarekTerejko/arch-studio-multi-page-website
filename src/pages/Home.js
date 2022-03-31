import { motion } from "framer-motion";
import { ContainerEl } from "../components/Container/ContainerElement";
import HomePageBanner from "../components/HomePageBanner";
import HomePageFeatured from "../components/HomePageFeatured";
import HomePageHero from "../components/HomePageHero";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Slider from "../components/Slider";
import useFetch from "../useFetch";

const Home = ({ containerVariants }) => {
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
          <Slider data={data[0].slider} />
          <HomePageHero data={data[0].HomePageWelcome} />
          <HomePageBanner data={data[0].HomePageBannerImgs} />
          <HomePageFeatured data={data[0].portfolioData} />
        </motion.div>
      )}
    </>
  );
};

export default Home;
