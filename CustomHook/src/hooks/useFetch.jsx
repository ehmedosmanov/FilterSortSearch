import { useEffect } from "react";

const useFetch = (url, callback) => {
    const fetchData = async () => {
        try {
          await fetch(url)
            .then((res) => res.json())
            .then((data) => callback(data));
        } catch (error) {
          console.log(error);
        }
      };

  useEffect(() => {
    fetchData()

  }, [url,callback]);

  return <div></div>;
};

export default useFetch;
