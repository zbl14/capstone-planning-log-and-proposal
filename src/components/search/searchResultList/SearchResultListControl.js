import React, { useState } from "react";
import SearchResultList from "./SearchResultList";
import SearchResultDetail from "./searchResultDetail/SearchResultDetail";
import PropTypes from "prop-types";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { red } from "@mui/material/colors";
import { Container } from "@mui/material/";
import styled from "styled-components";

const BusinessListButton = styled.button`
  margin: 24px;
  padding: 0;
  border-width: 0;
  border-color: transparent;
  background: transparent;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  font-size: 20px;
  font-family: inherit;
  padding: 5px 12px;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #ff5964;
  border-radius: 100px;
  background: #fff;
  color: #ff5964;
  -webkit-transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    border-color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    border-color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: #ff1424;
    content: "";
    opacity: 0;
    z-index: -1;
    -webkit-transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: translate3d(-110%, -10%, 0) skewX(-20deg);
    transform: translate3d(-110%, -10%, 0) skewX(-20deg);
  }
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: #ff5964;
    content: "";
    opacity: 0;
    z-index: -1;
    -webkit-transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: translate3d(110%, -10%, 0) skewX(-20deg);
    transform: translate3d(110%, -10%, 0) skewX(-20deg);
  }
  &:hover,
  :focus {
    box-shadow: 0 1px 8px rgba(58, 51, 53, 0.3);
    color: #fff;
    -webkit-transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
  }
  &:hover:before,
  :focus:before {
    opacity: 1;
    -webkit-transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: translate3d(-50%, -10%, 0) skewX(-20deg);
    transform: translate3d(-50%, -10%, 0) skewX(-20deg);
  }
  &:hover:after,
  :focus:after {
    opacity: 1;
    -webkit-transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1),
      -webkit-transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: translate3d(50%, -10%, 0) skewX(-20deg);
    transform: translate3d(50%, -10%, 0) skewX(-20deg);
  }
`;

const SearchResultListControl = (props) => {
  const [selectedSearchResult, setSelectedSearchResult] = useState(null);
  const { businesses } = props;

  const handleClick = () => {
    if (selectedSearchResult != null) {
      setSelectedSearchResult(null);
    } else {
      handleBackToTop();
    }
  };

  const handleChangingSelectedSearchResult = (id) => {
    if (businesses.length !== 0) {
      const selection = businesses.filter((business) => business.id === id)[0];
      setSelectedSearchResult(selection);
    }
  };

  const handleBackToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  let curVisibleState;
  let button = null;

  if (selectedSearchResult != null) {
    curVisibleState = <SearchResultDetail business={selectedSearchResult} />;
    button = (
      <BusinessListButton onClick={handleClick}>
        Return to businesses list
      </BusinessListButton>
    );
  } else {
    curVisibleState = (
      <SearchResultList
        businesses={businesses}
        onSearchResultSelection={handleChangingSelectedSearchResult}
      />
    );
    button = (
      <VerticalAlignTopIcon
        onClick={handleClick}
        fontSize="large"
        sx={{
          bgcolor: red[500],
          color: "white",
          border: 1,
          borderColor: "black",
          margin: "1.5rem",
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <Container>
        {curVisibleState}
        {button}
      </Container>
    </React.Fragment>
  );
};

SearchResultListControl.propTypes = {
  businesses: PropTypes.array,
};

export default SearchResultListControl;
