import React from "react";
import PropTypes from "prop-types";

const SearchResultSummary = (props) => {
  const sortBy = (props) => {
    switch (props.sort_by) {
      case "best_match":
        return "Best Match";
      case "rating":
        return "Rating";
      case "review_count":
        return "Review Count";
      default:
        throw new Error(`There is no sort matching ${props.sortBy}.`);
    }
  };
  return (
    <React.Fragment>
      <p>
        {props.term} in {props.location}
      </p>
      <p>
        Showing 1-{props.showResults} out of {props.amountResults} results and
        sorted by {sortBy(props)}
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
