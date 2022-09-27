import React from "react";
import SearchResult from "./searchResult/SearchResult";
import PropTypes from "prop-types";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../map/Map";

const SearchResultList = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    version: "weekly",
  });

  return (
    <React.Fragment>
      {isLoaded ? <Map businesses={props.businesses} /> : null}
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
