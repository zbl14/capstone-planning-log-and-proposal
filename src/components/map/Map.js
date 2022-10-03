import React, { useState } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Map = (props) => {
  const [activeMarker, setActiveMarker] = useState(null);

  if (props.businesses.length === 0) return null;

  const markers = props.businesses.map((business) => {
    return {
      id: business.id,
      name: business.name,
      position: {
        lat: business.coordinates.latitude,
        lng: business.coordinates.longitude,
      },
    };
  });

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={1}
      >
        <GoogleMap
          onLoad={handleOnLoad}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: "50vw", height: "50vh" }}
        >
          {markers.map(({ id, name, position }) => (
            <MarkerF
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                </InfoWindow>
              ) : null}
            </MarkerF>
          ))}
        </GoogleMap>
      </Box>
    </React.Fragment>
  );
};

Map.propTypes = {
  businesses: PropTypes.array,
};

export default Map;
