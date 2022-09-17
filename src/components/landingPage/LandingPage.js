import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <h1>LandingPage</h1>;
      <Link to="/search">
        <button submit>Search</button>
      </Link>
    </React.Fragment>
  );
};

export default LandingPage;
