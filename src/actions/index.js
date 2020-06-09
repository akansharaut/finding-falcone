import { SET_PLANETS, SET_VEHICLES, GET_PLANET, GET_VEHICLE, GET_PLANET_NAME } from "../constants/index";

export function setPlanets(payload) {
  return { 
    type: SET_PLANETS, 
    payload
  };
}

export function setVehicles(payload) {
  return { 
    type: SET_VEHICLES, 
    payload
  };
}

export function getPlanet(planet) {
  return {
    type: GET_PLANET,
    planet
  }
}

export function getVehicle(vehicle) {
  return {
    type: GET_VEHICLE,
    vehicle
  }
}

export function setPlanetName(planetName) {
  return {
    type: GET_PLANET_NAME,
    planetName
  }
}

