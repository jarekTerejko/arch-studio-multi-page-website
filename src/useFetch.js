import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorValue, setFetchErrorValue] = useState("");
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const getData = async (url) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw Error("Could not fetch data for that resource");
        }
        const data = await response.json();
        console.log(data);
        setData([data]);
        setFetchError(false);
        setFetchErrorValue("");
      } catch (error) {
        console.error(error);
        setFetchError(true);
        setFetchErrorValue(error.message);
      }

      setIsLoading(false);
    };

    getData(url);
  }, [url]);

  return { data, isLoading, fetchErrorValue, fetchError };
};

export default useFetch;
