import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <React.Fragment>
      <h1> Foodie Alliance</h1>
      <button>
        <Link to="/">Home</Link>
      </button>

      <button>
        <Link to="/sign-in">Sign In</Link>
      </button>
    </React.Fragment>
  );
};

export default TopNav;
