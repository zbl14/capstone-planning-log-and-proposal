import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Select, MenuItem, Stack } from "@mui/material";

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
        <Stack direction="row" alignItems="center">
          <TextField
            type="text"
            name="term"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            value={term}
            label="FIND"
            sx={{
              backgroundColor: "white",
              minWidth: "300px",
              margin: "0.5rem",
            }}
          />
          <TextField
            type="text"
            name="location"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            value={location}
            label="NEAR"
            sx={{
              backgroundColor: "white",
              minWidth: "300px",
              margin: "0.5rem",
            }}
          />
          <Select
            name="sortBy"
            onChange={(event) => {
              setSortBy(event.target.value);
            }}
            sx={{ backgroundColor: "white", margin: "0.5rem" }}
            defaultValue="best_match"
          >
            <MenuItem value="best_match" disabled>
              Sort By
            </MenuItem>
            <MenuItem value="best_match">Best Match</MenuItem>
            <MenuItem value="rating">Highest Rated</MenuItem>
            <MenuItem value="review_count">Most Reviewd</MenuItem>
          </Select>
          <SearchIcon
            onClick={submit}
            fontSize="large"
            style={{
              color: "white",
              backgroundColor: "#bd1f1f",
              cursor: "pointer",
              padding: "0.75rem",
              borderRadius: "5px",
              margin: "0.5rem",
            }}
          />
        </Stack>
      </form>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func,
};

export default SearchBar;
