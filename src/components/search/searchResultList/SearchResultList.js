import React from "react";
import SearchResult from "./searchResult/SearchResult";
import PropTypes from "prop-types";

const SearchResultList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.businesses).map((business) => (
        <SearchResult
          whenSearchResultClicked={props.onSearchResultSelection}
          key={business.id}
          business={business}
        />
      ))}
    </React.Fragment>
  );
};

// const SearchResultList = (props) => {
//   let searchResults;

//   if (props.businesses && props.businesses.length > 0) {
//     searchResults = props.businesses.map((business) => (
//       <SearchResult key={business.id} business={business} />
//     ));
//   }

//   return <div>{searchResults}</div>;
// };

SearchResultList.propTypes = {
  businesses: PropTypes.array,
};

export default SearchResultList;
