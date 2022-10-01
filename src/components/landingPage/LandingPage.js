import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { BackgroundSlideshow } from "./backgroundSlider/BackGroundSlider";
import TopNav from "../TopNav";

const LandingPage = () => {
  const navigate = useNavigate();

  const search = (term, location, sortBy) => {
    console.log(term, location, sortBy);
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
        <SearchBar search={search} />
      </div>
      <BackgroundSlideshow />
    </React.Fragment>
  );
};

export default LandingPage;
