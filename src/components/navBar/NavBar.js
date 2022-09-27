import React from "react";
import SearchBar from "../landingPage/searchBar/SearchBar";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <h1>This is a NavBar</h1>
      <SearchBar
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <button>Sign In</button>
      <button>Sign Up</button>
      <hr />
    </React.Fragment>
  );
};

export default NavBar;
