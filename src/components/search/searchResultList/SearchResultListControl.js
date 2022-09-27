import React, { useState } from "react";
import SearchResultList from "./SearchResultList";
import SearchResultDetail from "./searchResultDetail/SearchResultDetail";
import PropTypes from "prop-types";

const SearchResultListControl = (props) => {
  const [selectedSearchResult, setSelectedSearchResult] = useState(null);
  const businesses = props.businesses;

  const handleClick = () => {
    if (selectedSearchResult != null) {
      setSelectedSearchResult(null);
    }
  };

  const handleChangingSelectedSearchResult = (id) => {
    if (businesses.length !== 0) {
      const selection = businesses.filter((business) => business.id === id)[0];
      setSelectedSearchResult(selection);
    }
  };

  let curVisibleState;
  let buttonText = null;

  if (selectedSearchResult != null) {
    curVisibleState = <SearchResultDetail business={selectedSearchResult} />;
    buttonText = "Return to businesses list";
  } else {
    curVisibleState = (
      <SearchResultList
        businesses={businesses}
        onSearchResultSelection={handleChangingSelectedSearchResult}
      />
    );
    buttonText = "home";
  }

  return (
    <React.Fragment>
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
