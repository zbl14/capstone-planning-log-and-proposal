import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <React.Fragment>
      <button>
        <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">
          cors enable
        </a>
      </button>
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
