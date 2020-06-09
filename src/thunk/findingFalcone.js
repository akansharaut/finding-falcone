import {setPlanetName} from '../actions/index';

export function fetchFindingFalcone(requestBody) {
    return dispatch => {
        fetch('https://findfalcone.herokuapp.com/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(response => {
                fetch('https://findfalcone.herokuapp.com/find', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: response.token,
                        planet_names: requestBody.selectedPlanets,//["Donlon", "Enchai", "Jebing", "Sapir"],
                        vehicle_names: requestBody.selectedVehicles //["Space pod", "Space rocket", "Space shuttle", "Space ship"]
                    })
                })
                    .then(response => response.json())
                    .then(response => dispatch(setPlanetName(response.planet_name)))
                    .catch(error => console.log(error));
            });
    }
}