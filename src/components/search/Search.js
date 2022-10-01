import React from "react";
import NavBar from "../navBar/NavBar";
import SearchResultSummary from "../search/searchResultSummary/SearchResultSummary";
import SearchResultListControl from "../search/searchResultList/SearchResultListControl";
import { useNavigate, useLocation } from "react-router-dom";
import useBusinessSearch from "../../hooks/yelpAPI/useBusinessSearch";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const sortBy = params.get("sort_by");
  const [businesses, amountResults, searchParams, performSearch] =
    useBusinessSearch(term, locationParam, sortBy);
  console.log(searchParams);

  if (!term || !locationParam) {
    navigate("/");
  }

  const search = (term, location, sort_by) => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    const encodedSortBy = encodeURI(sort_by);
    navigate(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&sort_by=${encodedSortBy}`
    );
    console.log("hi");
    console.log({ term, location, sort_by });
    performSearch({ term, location, sort_by });
  };
  console.log(searchParams.location);
  console.log(searchParams.sort_by);
  return (
    <React.Fragment>
      <NavBar
        term={term}
        location={locationParam}
        sortBy={sortBy}
        search={search}
      />
      <SearchResultSummary
        term={searchParams.term}
        location={searchParams.location}
        sort_by={searchParams.sort_by}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      <SearchResultListControl businesses={businesses} />
    </React.Fragment>
  );
};

export default Search;
