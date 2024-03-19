import { StateInterface } from "@/store";
import { useStore } from "vuex";
import { computed } from "vue";
import Mapboxgl from "mapbox-gl";
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/maps/actions";

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),

    isMapReady: computed<boolean>(() => store.getters["map/isMapReady"]),

    setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map),
    setPlacesMarkers: (places: Feature[]) =>
      store.commit("map/setPlacesMarkers", places),

    getRouteBetweenPoints: (start: LngLat, end: LngLat) =>
      store.dispatch("map/getRouteBetweenPoints", { start, end }),
  };
};
