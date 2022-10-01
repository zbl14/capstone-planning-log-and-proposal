import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");
  const [sortBy, setSortBy] = useState(props.sortBy || "best_match");

  const submit = (event) => {
    props.search(term, location, sortBy);
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <input
          type="text"
          name="term"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
          value={term}
        />
        <input
          type="text"
          name="location"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          value={location}
        />
        <select
          name="sortBy"
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          defaultValue="best_match"
        >
          <option value="best_match" disabled>
            Sort By
          </option>
          <option value="best_match">Best Match</option>
          <option value="rating">Highest Rated</option>
          <option value="review_count">Most Reviewd</option>
        </select>
        <button onClick={submit}>Search</button>
      </form>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func,
};

export default SearchBar;
