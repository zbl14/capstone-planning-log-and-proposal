import React from "react";
import SearchResult from "./searchResult/SearchResult";
import PropTypes from "prop-types";

const SearchResultList = (props) => {
  return (
    <React.Fragment>
      <h1>this is search result list</h1>
      <hr />
      {Object.values(props.businesses).map((business) => (
        <SearchResult key={business.id} business={business} />
      ))}
    </React.Fragment>
  );
};

SearchResultList.propTypes = {
  business: PropTypes.object,
};

export default SearchResultList;
