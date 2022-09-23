import React from "react";
import PropTypes from "prop-types";

const SearchResultSummary = (props) => {
  return (
    <React.Fragment>
      <h1>This is a SearchResultSummary</h1>
      <p>
        {props.term} in {props.location}
      </p>
      <p>
        Showing 1-{props.showResults} out of {props.amountResults} results
      </p>
    </React.Fragment>
  );
};

SearchResultSummary.propTypes = {
  term: PropTypes.string,
  location: PropTypes.string,
  amountResults: PropTypes.number,
};

export default SearchResultSummary;
