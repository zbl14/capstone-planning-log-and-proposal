import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { useNavigate, Link } from "react-router-dom";
import { BackgroundSlideshow } from "./backgroundSlider/BackGroundSlider";
import TopNav from "../TopNav";
import logo from "./../../assets/foodie-alliance-logo.png";
import styled from "styled-components";

export const FoodieAllianceLogo = styled.img`
  width: 150px;
  margin: 30px 0;
`;

const SearchArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingPage = () => {
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
      <SearchArea>
        <Link to="/">
          <FoodieAllianceLogo src={logo} alt="logo" />
        </Link>
        <SearchBar search={search} />
      </SearchArea>
      <BackgroundSlideshow />
    </React.Fragment>
  );
};
