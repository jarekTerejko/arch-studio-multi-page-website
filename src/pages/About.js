import { ContainerEl } from "../components/Container/ContainerElement";
import IntroHeader from "../components/IntroHeader";
import Loader from "../components/Loader";
import useFetch from "../useFetch";

const About = () => {
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
          <IntroHeader data={data[0].aboutData} />
        </>
      )}
    </>
  );
};

export default About;
