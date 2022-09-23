import { useState, useEffect, useReducer } from "react";
import queryString from "query-string";
import { API_BASE_URL, BEARER_TOKEN } from "./config";
import useBusinessSearchReducer from "../../reudcers/use-business-search-reducer";
import { getBusinessSuccess, getBusinessFailure } from "../../actions/index";

const initialState = {
  isLoaded: false,
  error: null,
  businesses: [],
  amountResults: 0,
};

const useBusinessSearch = (term, location) => {
  const [state, dispatch] = useReducer(useBusinessSearchReducer, initialState);
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
          // console.log(response);
          const jsonResponse = await response.json();
          // console.log(jsonResponse);
          const action = getBusinessSuccess(
            jsonResponse.businesses,
            jsonResponse.total
          );
          dispatch(action);
        }
      } catch (error) {
        const action = getBusinessFailure(error.message);
        dispatch(action);
      }
    };
    fetchData();
  }, [searchParams]);

  const { error, isLoaded, businesses, amountResults } = state;

  return [
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
    error,
    isLoaded,
  ];
};

export default useBusinessSearch;
