import React from "react";
import SearchResult from "./searchResult/SearchResult";
import PropTypes from "prop-types";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../map/Map";
import { Box, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const SearchResultList = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    version: "weekly",
  });

  let searchResultlist = (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );

  if (props.businesses && props.businesses.length > 0) {
    searchResultlist = (
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          sx={{ justifyContent: "space-around" }}
          rowSpacing={{ xs: 1, sm: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Object.values(props.businesses).map((business, index) => (
            <Grid xs={5} sm={4} md={4} lg={4} key={index}>
              <SearchResult
                whenSearchResultClicked={props.onSearchResultSelection}
                key={business.id}
                business={business}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <React.Fragment>
      {isLoaded ? <Map businesses={props.businesses} /> : null}
      <hr />
      {searchResultlist}
    </React.Fragment>
  );
};

SearchResultList.propTypes = {
  businesses: PropTypes.array,
};

export default SearchResultList;
