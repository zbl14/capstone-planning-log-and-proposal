import React, { useState } from "react";
import SearchResultList from "./SearchResultList";
import SearchResultDetail from "./searchResultDetail/SearchResultDetail";
import PropTypes from "prop-types";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { red } from "@mui/material/colors";

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
    button = <button onClick={handleClick}>Return to businesses list</button>;
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
      {curVisibleState}
      {button}
    </React.Fragment>
  );
};

SearchResultListControl.propTypes = {
  businesses: PropTypes.array,
};

export default SearchResultListControl;
