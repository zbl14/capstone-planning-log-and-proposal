import { useState, useEffect } from "react";
import queryString from "query-string";
import { API_BASE_URL, BEARER_TOKEN } from "./config";

const useBusinessSearch = (term, location) => {
  const [error, setError] = useState(null);
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
        console.log(response);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        setBusinesses(jsonResponse.businesses);
        setAmountResults(jsonResponse.total);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [searchParams]);
  return [error, businesses, amountResults, searchParams, setSearchParams];
};

export default useBusinessSearch;
