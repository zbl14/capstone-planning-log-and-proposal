import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const search = (term, location) => {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    navigate(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  };
  return (
    <React.Fragment>
      <h1>LandingPage</h1>;
      <SearchBar search={search} />
    </React.Fragment>
  );
};

export default LandingPage;
