import { setVehicles } from '../actions/index';

export function fetchVehicles() {
  return dispatch => {
    fetch('https://findfalcone.herokuapp.com/vehicles')
      .then(response => response.json())
      .then(data => dispatch(setVehicles(data))
      );
  }
}