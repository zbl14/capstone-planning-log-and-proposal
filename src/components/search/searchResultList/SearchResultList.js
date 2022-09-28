import React from "react";
import SearchResult from "./searchResult/SearchResult";
import PropTypes from "prop-types";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../map/Map";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const SearchResultList = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    version: "weekly",
  });

  return (
    <React.Fragment>
      {isLoaded ? <Map businesses={props.businesses} /> : null}
      <hr />
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
            <Grid xs={5} sm={4} md={4} lg={3} key={index}>
              <SearchResult
                whenSearchResultClicked={props.onSearchResultSelection}
                key={business.id}
                business={business}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

SearchResultList.propTypes = {
  businesses: PropTypes.array,
};

export default SearchResultList;
