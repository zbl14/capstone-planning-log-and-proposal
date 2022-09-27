import React from "react";
import SearchBar from "../landingPage/searchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <Link to="/">
        <h1>Home, Logo placeholder</h1>
      </Link>
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
