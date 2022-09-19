import React from "react";
import NavBar from "../navBar/NavBar";
import SearchResultSummary from "../search/searchResultSummary/SearchResultSummary";
import Map from "../map/Map";
import SearchResultListControl from "../search/searchResultList/SearchResultListControl";

const Search = () => {
  return (
    <React.Fragment>
      <NavBar />
      <SearchResultSummary />
      <Map />
      <SearchResultListControl />
    </React.Fragment>
  );
};

export default Search;
