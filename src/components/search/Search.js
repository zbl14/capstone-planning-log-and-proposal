import React from "react";
import NavBar from "../navBar/NavBar";
import SearchResultSummary from "../search/searchResultSummary/SearchResultSummary";
import Map from "../map/Map";
import SearchResultListControl from "../search/searchResultList/SearchResultListControl";
import { useNavigate, useLocation } from "react-router-dom";
import useBusinessSearch from "../../hooks/yelpAPI/useBusinessSearch";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam);

  console.log(businesses);

  if (!term || !locationParam) {
    navigate("/");
  }

  const search = (term, location) => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    navigate(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
    performSearch({ term, location });
  };

  return (
    <React.Fragment>
      <NavBar term={term} location={locationParam} search={search} />
      <SearchResultSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      <Map />
      <SearchResultListControl businesses={businesses} />
    </React.Fragment>
  );
};

export default Search;
