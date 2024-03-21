import { useEffect, useState } from "react";
import axios from "axios";




const fetchDataFromAPI = async (url) => {
  const apiUrl = "https://fereclaurus.com/";
  const params =
    "336bdb46cc7895f8d632230c0c3f194e2014a2fb5270ce42de0e615f3ee8b918f4afe6119f918fdf15f5a3471d7065863b04dc4f90aafaed383f103d69152fdfd96da3ff66ea3924e653e122b816972a9b3639af53a65dea08f9fe1fabec27396b71601ca97adfd98687b59a2abdba4176d871646abaa5387f90adb8ecbf4d1a";

  try {
    // Making the GET request with the bearer token
    const response = await fetch(apiUrl + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${params}`,
      },
    });

    // Checking if the request was successful (status code 200-299)
    if (response.ok) {
      // Parsing the JSON data from the response
      const result = await response.json();
      return result;
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const useFetch = (endpoint) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    let isMounted = true;
    let source = axios.CancelToken.source();

    const makeApiCall = async () => {
      try {
        const res = await fetchDataFromAPI(endpoint, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setProducts(res);
        }
      } catch (error) {
        // Handle error
      }
    };

    makeApiCall();

    return () => {
      isMounted = false;
      source.cancel("Request canceled");
    };
  }, [endpoint]);

  return { products };
};

export default useFetch;
