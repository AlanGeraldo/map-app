import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoiYWxhbmdlcmFsZG8iLCJhIjoiY2xyNWRpemlsMXVqMDJqbmVkeHl3ZzhmdyJ9.5aK7lH2gVbnSZi1u7oKTlA",
  },
});

export default searchApi;
