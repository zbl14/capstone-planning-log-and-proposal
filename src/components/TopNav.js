import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/foodie-alliance-logo.png";

const TopNav = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={logo} alt="logo" width="100px" />
      </Link>
      <button>
        <Link to="/sign-in">Sign In / Sign Out</Link>
      </button>
      <button>
        <Link to="/sign-up">Sign Up</Link>
      </button>
    </React.Fragment>
  );
};

export default TopNav;
