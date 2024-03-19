import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "full",
    steps: false,
    access_token:
      "pk.eyJ1IjoiYWxhbmdlcmFsZG8iLCJhIjoiY2xyNWRpemlsMXVqMDJqbmVkeHl3ZzhmdyJ9.5aK7lH2gVbnSZi1u7oKTlA",
  },
});

export default directionsApi;
