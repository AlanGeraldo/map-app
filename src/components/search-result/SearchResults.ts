import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchResults",

  setup() {
    const { isLoadingPlaces, places, userLocation } = usePlacesStore();
    const { map, setPlacesMarkers, getRouteBetweenPoints } = useMapStore();
    const activePlace = ref("");

    watch(places, (newPlaces) => {
      activePlace.value = "";
      setPlacesMarkers(newPlaces);
    });

    return {
      isLoadingPlaces,
      places,
      activePlace,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.center;

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 14,
        });
      },

      getRouteDirections: (place: Feature) => {

         if (!userLocation.value) return;

        const [lng, lat] = place.center;
        const [startLng, endLat] = userLocation.value;

        const start: [number, number] = [startLng, endLat];
        const end: [number, number] = [lng, lat];

        getRouteBetweenPoints(start, end);

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 14,
        });

      }
    };
  },
});
