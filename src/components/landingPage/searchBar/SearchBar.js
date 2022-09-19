import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <React.Fragment>
      <h1>This is a SearchBar, a form</h1>
      <Link to="/search">
        <button submit>Search</button>
      </Link>
    </React.Fragment>
  );
};

export default SearchBar;
