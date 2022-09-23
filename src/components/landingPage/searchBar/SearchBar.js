import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  const submit = (event) => {
    props.search(term, location);
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
        <button onClick={submit}>Search</button>
      </form>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func,
};

export default SearchBar;
