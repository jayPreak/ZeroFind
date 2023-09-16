import axios from "axios";
import { useEffect, useState } from "react";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = process.env.EXPO_PUBLIC_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "4f5121c6cdmsh4858bb352b82c3fp1881fejsncc43d789f097",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("theres an error sire", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData;
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
