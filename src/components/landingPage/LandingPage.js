import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { BackgroundSlideshow } from "./backgroundSlider/BackGroundSlider";
import TopNav from "../TopNav";

const LandingPage = () => {
  const navigate = useNavigate();

  const search = (term, location) => {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    navigate(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
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
