import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchResultSummaryWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(230, 230, 230);
`;

const SearchSummary = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
`;

const SummaryText = styled.p`
  font-size: 0.9rem;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;

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
      <SearchResultSummaryWrapper>
        <SearchSummary>
          <SummaryText>
            <strong>{props.term}</strong> in {props.location}
          </SummaryText>
          <SummaryText>
            Showing 1-{props.showResults} out of {props.amountResults} results
            and sorted by {sortBy(props)}
          </SummaryText>
        </SearchSummary>
      </SearchResultSummaryWrapper>
    </React.Fragment>
  );
};

SearchResultSummary.propTypes = {
  term: PropTypes.string,
  location: PropTypes.string,
  amountResults: PropTypes.number,
};

export default SearchResultSummary;
