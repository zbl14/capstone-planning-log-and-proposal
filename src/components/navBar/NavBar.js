import React from "react";
import SearchBar from "../landingPage/searchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/foodie-alliance-logo.png";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={logo} alt="logo" width="75px" />
      </Link>
      <SearchBar
        term={props.term}
        location={props.location}
        sort_by={props.sortBy}
        search={props.search}
      />
      <button>
        <Link to="/sign-in">Sign In / Sign Out</Link>
      </button>
      <button>
        <Link to="/sign-up">Sign Up</Link>
      </button>
      <hr />
    </React.Fragment>
  );
};

export default NavBar;
