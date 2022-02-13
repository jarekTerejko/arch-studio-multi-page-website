import { ContainerEl } from "../components/Container/ContainerElement";
import Loader from "../components/Loader";
import IntroHeader from "../components/IntroHeader";
import useFetch from "../useFetch";

const Contact = () => {
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
          <IntroHeader data={data[0].contactData} />
        </>
      )}
    </>
  );
};

export default Contact;
