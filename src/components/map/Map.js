import React, { useState } from "react";
import { GoogleMap, InfoWindow, MarkerF } from "@react-google-maps/api";
import PropTypes from "prop-types";

// const markers = [
//   {
//     id: "dBSlJx9gNtomml0ozHNKyQ",
//     name: "Peter's Gourmade Burgers",
//     position: {
//       lat: 33.73423,
//       lng: -117.82673,
//     },
//   },
//   {
//     id: "vK9PhezqXQgVdz-R6207Tg",
//     name: "American Grub",
//     position: {
//       lat: 33.74245,
//       lng: -117.8233,
//     },
//   },
//   {
//     id: "LOgOKPQce_wzT6nc0ZPpMQ",
//     name: "Hopdoddy Burger Bar",
//     position: {
//       lat: 33.7223470012554,
//       lng: -117.793670656187,
//     },
//   },
//   {
//     id: "mQzC5F3oXu4NxybQuQ73hA",
//     name: "Gourmet Burger",
//     position: {
//       lat: 33.770089,
//       lng: -117.834987,
//     },
//   },
//   {
//     id: "DGy688y4F0WAj2-CpxRALw",
//     name: "The Cut",
//     position: {
//       lat: 33.683263,
//       lng: -117.813121,
//     },
//   },
//   {
//     id: "z_AC2SilHh2XYBtxup_uAw",
//     name: "Burger Boss",
//     position: {
//       lat: 33.71161,
//       lng: -117.81786,
//     },
//   },
//   {
//     id: "n1_MzpPXUdrVdWxshcWO1g",
//     name: "Rock & Brews - Tustin",
//     position: {
//       lat: 33.74708167,
//       lng: -117.80821667,
//     },
//   },
//   {
//     id: "h8312DUzI-4cbxJMKUKpIQ",
//     name: "STOWAWAY",
//     position: {
//       lat: 33.6982326,
//       lng: -117.8270021,
//     },
//   },
//   {
//     id: "TmzXrhAxgaIBfRsXIBVh7A",
//     name: "1st Street BurgerHouse",
//     position: {
//       lat: 33.745987,
//       lng: -117.837934,
//     },
//   },
//   {
//     id: "MNvBM6N8zeldlSRUuP4nKw",
//     name: "Hammer Burger",
//     position: {
//       lat: 33.69620818067643,
//       lng: -117.822259,
//     },
//   },
//   {
//     id: "WqHPB51wrjn1exIs-s9UXw",
//     name: "The Stand",
//     position: {
//       lat: 33.66988155161482,
//       lng: -117.78621264232788,
//     },
//   },
//   {
//     id: "wJ1rt-XHBLrK8yX-TcftCQ",
//     name: "Lazy Dog Restaurant & Bar",
//     position: {
//       lat: 33.728626,
//       lng: -117.787977,
//     },
//   },
//   {
//     id: "LQ1ID8-nZITiZoTUm6Kl7A",
//     name: "Smashed Out",
//     position: {
//       lat: 33.80941,
//       lng: -117.89576,
//     },
//   },
//   {
//     id: "TX_eN7qJaqiJqBile4kMSA",
//     name: "The BurgerStop",
//     position: {
//       lat: 33.7157941,
//       lng: -117.8700031,
//     },
//   },
//   {
//     id: "jaT33nTj2oBcbM5281ovug",
//     name: "The Habit Burger Grill",
//     position: {
//       lat: 33.738091294467,
//       lng: -117.82178372945995,
//     },
//   },
//   {
//     id: "TEoLBfiX8eHf_dKDNndU6A",
//     name: "The Habit Burger Grill",
//     position: {
//       lat: 33.70473,
//       lng: -117.787,
//     },
//   },
//   {
//     id: "rK-nnggAgK6T4Sea8pKTFg",
//     name: "MOOYAH Burgers, Fries and Shakes",
//     position: {
//       lat: 33.671605,
//       lng: -117.789448,
//     },
//   },
//   {
//     id: "LXmRXTgdC1BZcT51yCNXDQ",
//     name: "Ojai Burger",
//     position: {
//       lat: 33.78759,
//       lng: -117.85513,
//     },
//   },
//   {
//     id: "8pI37lpeVD057icnfjOg5A",
//     name: "Nice Burger 100% Vegan",
//     position: {
//       lat: 33.760266,
//       lng: -117.843081,
//     },
//   },
//   {
//     id: "pHVIQYZ4X3jhWK3VSWNtbQ",
//     name: "The Swinging Door Saloon",
//     position: {
//       lat: 33.7425698,
//       lng: -117.8235351,
//     },
//   },
// ];

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
    </React.Fragment>
  );
};

Map.propTypes = {
  businesses: PropTypes.array,
};

export default Map;
