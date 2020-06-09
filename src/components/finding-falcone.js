import React, { Component } from 'react';
import Dropdown from './dropdown';
import Radio from './radio';
import { fetchPlanets } from '../thunk/fetchPlanets';
import { fetchVehicles } from '../thunk/fetchingVehicles';
import { fetchFindingFalcone } from '../thunk/findingFalcone';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSelectedPlanets, getPlanets, getVehicles, getSelectedVehicles } from '../reducers/index';
import '../styles/finding_falcone.css';
import { Link } from 'react-router-dom';

class FindingFalcone extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.findingFalcone = this.findingFalcone.bind(this)
    }

    componentDidMount() {
        this.props.fetchPlanets();
        this.props.fetchVehicles();
    }

    findingFalcone() {
        const { selectedPlanets, selectedVehicles } = this.props;
        
        this.props.fetchFindingFalcone({
            selectedPlanets: [selectedPlanets.Destination_1, 
                selectedPlanets.Destination_2,
                selectedPlanets.Destination_3,
                selectedPlanets.Destination_4],
            selectedVehicles
        });
    }

    getDestinationTwo(planets, selectedPlanets) {
        return planets.filter(planet => planet.name !== selectedPlanets.Destination_1);
    }

    getDestinationThree(planets, selectedPlanets) {
        return planets.filter(planet =>
            planet.name !== selectedPlanets.Destination_1 &&
            planet.name !== selectedPlanets.Destination_2
        );
    }

    getDestinationFour(planets, selectedPlanets) {
        return planets.filter(planet =>
            planet.name !== selectedPlanets.Destination_1 &&
            planet.name !== selectedPlanets.Destination_2 &&
            planet.name !== selectedPlanets.Destination_3
        );
    }

    getVehiclesListOne(vehicles, selectedPlanets) {
        if (selectedPlanets.Destination_1) {
            return (
                <Radio vehicles={vehicles} />
            );
        }
    }

    getVehiclesListTwo(vehicles, selectedPlanets) {
        console.log(selectedPlanets);
        if (selectedPlanets.Destination_2) {
            return (
                <Radio vehicles={vehicles} />
            );
        }
    }

    getVehiclesListThree(vehicles, selectedPlanets) {
        console.log(selectedPlanets);
        if (selectedPlanets.Destination_3) {
            return (
                <Radio vehicles={vehicles} />
            );
        }
    }

    getVehiclesListFour(vehicles, selectedPlanets) {
        console.log(selectedPlanets);
        if (selectedPlanets.Destination_4) {
            return (
                <Radio vehicles={vehicles} />
            );
        }
    }

    render() {
        const { planets, vehicles, selectedPlanets} = this.props;
        const heading = "Destination";

        return (
            <div className="finding-falcone">
                <h1>Finding Falcone!</h1>
                <h3>Select planet you want to search in:</h3>
                <div className="content">
                    <div>
                        <Dropdown
                            planets={planets}
                            heading={heading + " 1"}
                        />
                        {this.getVehiclesListOne(vehicles, selectedPlanets)}
                    </div>
                    <div>
                        <Dropdown planets={this.getDestinationTwo(planets, selectedPlanets)} heading={heading + " 2"} />
                        {this.getVehiclesListTwo(vehicles, selectedPlanets)}
                    </div>
                    <div>
                        <Dropdown planets={this.getDestinationThree(planets, selectedPlanets)} heading={heading + " 3"} />
                        {this.getVehiclesListThree(vehicles, selectedPlanets)}
                    </div>
                    <div>
                        <Dropdown planets={this.getDestinationFour(planets, selectedPlanets)} heading={heading + " 4"} />
                        {this.getVehiclesListFour(vehicles, selectedPlanets)}
                    </div>
                </div>
                <Link to="/falcone" className="finding-button" onClick={this.findingFalcone}>Finding Falcone</Link>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    planets: getPlanets(state),
    vehicles: getVehicles(state),
    selectedPlanets: getSelectedPlanets(state),
    selectedVehicles: getSelectedVehicles(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPlanets: fetchPlanets,
    fetchVehicles: fetchVehicles,
    fetchFindingFalcone: fetchFindingFalcone
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FindingFalcone);


