import React, { useState } from "react";
import SearchResultList from "./SearchResultList";
import SearchResultDetail from "./searchResultDetail/SearchResultDetail";
import PropTypes from "prop-types";

const SearchResultListControl = (props) => {
  const businesses = props.businesses;
  const [selectedSearchResult, setSelectedSearchResult] = useState(null);

  const handleClick = () => {
    if (selectedSearchResult != null) {
      setSelectedSearchResult(null);
    }
  };

  let curVisibleState;
  let buttonText = null;

  if (selectedSearchResult != null) {
    curVisibleState = <SearchResultDetail />;
    buttonText = "Return to businesses list";
  } else {
    curVisibleState = <SearchResultList businesses={businesses} />;
    buttonText = "home";
  }

  return (
    <React.Fragment>
      <h1>This is a SearchResultListControl</h1>
      {curVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
      <hr />
    </React.Fragment>
  );
};

SearchResultListControl.propTypes = {
  businesses: PropTypes.array,
};

export default SearchResultListControl;
