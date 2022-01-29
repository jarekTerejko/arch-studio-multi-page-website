import { ContainerEl } from "../components/Container/ContainerElement";
import Loader from "../components/Loader";
import Slider from "../components/Slider";
import useFetch from "../useFetch";

const Home = () => {
  const { data, isLoading, fetchErrorValue } = useFetch("../data.json");
  return (
    <>
      {console.log(data)}
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? (
        <ContainerEl>
          <h1>{fetchErrorValue}</h1>
        </ContainerEl>
      ) : (
        <>
          <Slider data={data[0].slider} />
        </>
      )}
    </>
  );
};

export default Home;
