import { setPlanets } from '../actions/index';

export function fetchPlanets() {
  return dispatch => {
    fetch('https://findfalcone.herokuapp.com/planets')
      .then(response => response.json())
      .then(data => dispatch(setPlanets(data))
      );
  }
}
