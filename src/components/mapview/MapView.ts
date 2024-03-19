import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";

import { useMapStore, usePlacesStore } from "@/composables";


export default defineComponent({
  name: "MapView",

  setup() {
    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) throw new Error("Div element no exist");
      if (!userLocation.value) throw new Error("Localizacion no encontarda");

      await Promise.resolve();

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: "mapbox://styles/mapbox/dark-v10",
        center: userLocation.value,
        zoom: 15,
      });

      const myLocationPopup = new Mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`
                <h4>Aqui estoy</h4>
                <p>Actualmente en Gallery</p>
                <p>${userLocation.value}</p>
                `);

        new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);

       setMap(map)
    };

    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    });

    watch(isUserLocationReady, () => {
      if (isUserLocationReady.value) initMap();
    });

    return {
      isUserLocationReady,
      mapElement,
    };
  },
});
