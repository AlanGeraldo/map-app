import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "../index";
import { directionsApi } from "@/apis";
import { DirectionsResponse } from "@/interfaces/directions";

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints(
    { commit },
    { start, end }: { start: LngLat; end: LngLat }
  ) {
    const res = await directionsApi.get<DirectionsResponse>(
      `${start.join(",")};${end.join(",")}`
    );
    const coordinates = res.data.routes[0].geometry.coordinates

    commit('setRoutePoline', coordinates)

    commit('setDistanceDuration', {
      distance: res.data.routes[0].distance,
      duration: res.data.routes[0].duration
    })
  },
};

export default actions;
