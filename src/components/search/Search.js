import React from "react";
import NavBar from "../navBar/NavBar";
import SearchResultSummary from "../search/searchResultSummary/SearchResultSummary";
// import Map from "../map/Map";
import SearchResultListControl from "../search/searchResultList/SearchResultListControl";
import { useNavigate, useLocation } from "react-router-dom";
import useBusinessSearch from "../../hooks/yelpAPI/useBusinessSearch";
// import { useLoadScript } from "@react-google-maps/api";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  if (!term || !locationParam) {
    navigate("/");
  }

  const search = (term, location) => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    navigate(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
    performSearch({ term, location });
  };

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  //   version: "weekly",
  // });

  return (
    <React.Fragment>
      <NavBar term={term} location={locationParam} search={search} />
      <SearchResultSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      {/* {isLoaded ? <Map businesses={businesses} /> : null} */}
      <SearchResultListControl businesses={businesses} />
    </React.Fragment>
  );
};

export default Search;
