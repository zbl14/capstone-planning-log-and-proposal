import { useState, useEffect } from "react";
import queryString from "query-string";
import { API_BASE_URL, BEARER_TOKEN } from "./config";

const useBusinessSearch = (term, location) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    const get = (path, queryParams) => {
      const query = queryString.stringify(queryParams);
      return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Origin: "localhost",
          withCredentials: true,
        },
      });
    };
    // setBusinesses([]);
    const fetchData = async () => {
      try {
        const response = await get("/businesses/search", searchParams);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          console.log(response);
          const jsonResponse = await response.json();
          // console.log(jsonResponse);
          setBusinesses(jsonResponse.businesses);
          setAmountResults(jsonResponse.total);
          setIsLoaded(true);
        }
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [searchParams]);
  return [
    error,
    isLoaded,
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
  ];
};

export default useBusinessSearch;
