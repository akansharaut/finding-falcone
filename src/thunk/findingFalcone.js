export function fetchFalconeToken(requestBody) {
    return dispatch => {
        fetch('https://findfalcone.herokuapp.com/token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }) .then(response => response.json())
            .then(response => {
                fetch('https://findfalcone.herokuapp.com/find', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: response.token,
                        planet_names: requestBody.selectedPlanets,
                        vehicle_names: requestBody.selectedVehicles
                    })
                })
                    .then(response => response.json());
            });
    }
}


export function getFindingFalcone(requestBody) {
    return dispatch => {

    }
}