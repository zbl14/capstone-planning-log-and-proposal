import { useState, useEffect } from "react";
import get from "./yelpAPI";

const useBusinessSearch = (term, location) => {
  const [error, setError] = useState(null);
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      try {
        const rawData = await get("/businesses/search", searchParams);
        // console.log(rawData);
        const response = await rawData.json();
        console.log(response);
        setBusinesses(response.businesses);
        setAmountResults(response.total);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [searchParams]);
  return [error, businesses, amountResults, searchParams, setSearchParams];
};

export default useBusinessSearch;
