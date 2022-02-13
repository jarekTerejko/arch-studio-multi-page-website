import { ContainerEl } from "../components/Container/ContainerElement";
import Loader from "../components/Loader";
import PortfolioGallery from "../components/PortfolioGallery";
import useFetch from "../useFetch";

const Portfolio = () => {
  const { data, isLoading, fetchErrorValue } = useFetch("../data.json");
  return (
    <>
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? (
        <ContainerEl>
          <h1>{fetchErrorValue}</h1>
        </ContainerEl>
      ) : (
        <>
          <PortfolioGallery data={data[0].portfolioData} />
        </>
      )}
    </>
  );
};

export default Portfolio;
