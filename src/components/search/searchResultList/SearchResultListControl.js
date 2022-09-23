import React, { useState } from "react";
import SearchResultList from "./SearchResultList";
import SearchResultDetail from "./searchResultDetail/SearchResultDetails";

const SearchResultListControl = (props) => {
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
    curVisibleState = <SearchResultList business={props} />;
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

export default SearchResultListControl;
