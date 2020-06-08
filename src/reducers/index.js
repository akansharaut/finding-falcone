import { SET_PLANETS, SET_VEHICLES, GET_PLANET, GET_VEHICLE } from "../constants/index";

const DEFAULT_STATE = {
  planets: [],
  vehicles: [],
  selectedPlanets: {},
  selectedVehicles: []
};

export function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        planets: action.payload
      }
    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload
      }
    case GET_PLANET:
      return {
        ...state,
        selectedPlanets: {
          ...state.selectedPlanets,
          ...action.planet
        }
      }
    case GET_VEHICLE:
      return {
        ...state,
        selectedVehicles: [
          ...state.selectedVehicles,
          action.vehicle
        ]
      }
    default:
      return state || DEFAULT_STATE;
  }
}

export const getSelectedPlanets = state => state.selectedPlanets;
export const getSelectedVehicles = state => state.selectedVehicles;
export const getPlanets = state => state.planets;
export const getVehicles = state => state.vehicles;