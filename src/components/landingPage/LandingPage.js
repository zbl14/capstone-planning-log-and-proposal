import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { BackgroundSlideshow } from "./backgroundSlider/BackGroundSlider";
import TopNav from "../TopNav";
import { Link } from "react-router-dom";
import logo from "./../../assets/foodie-alliance-logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const search = (term, location, sortBy) => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    const encodedSortBy = encodeURI(sortBy);
    navigate(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}&sort_by=${encodedSortBy}`
    );
  };
  return (
    <React.Fragment>
      <TopNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" width="100px" />
        </Link>
        <SearchBar search={search} />
      </div>
      <BackgroundSlideshow />
    </React.Fragment>
  );
};

export default LandingPage;
