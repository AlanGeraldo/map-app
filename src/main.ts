import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxhbmdlcmFsZG8iLCJhIjoiY2xyNWRpemlsMXVqMDJqbmVkeHl3ZzhmdyJ9.5aK7lH2gVbnSZi1u7oKTlA";

if (!navigator.geolocation) {
  throw new Error("Su navegador no soporta Geolocation");
}

createApp(App).use(store).use(router).mount("#app");
