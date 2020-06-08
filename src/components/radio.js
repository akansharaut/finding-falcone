import React, { Component } from 'react';
import '../styles/radio.css';
import { getVehicle } from '../actions/index';
import { connect } from 'react-redux';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleRadioChange = this.handleRadioChange.bind(this)
    }

    handleRadioChange(e) {
        this.props.getVehicle(e.target.value);
    }

    render() {
        const { vehicles } = this.props;

        return (
            <div className="radio-button">
                {vehicles.map((vehicle, idx) => (
                    <div key={idx}>
                        <input type='radio' name="vehicle" value={vehicle.name}
                            onChange={this.handleRadioChange} />
                        <label>{vehicle.name}</label> ({vehicle.total_no})
                    </div>
                ))}
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    getVehicle: vehicle => {
        dispatch(getVehicle(vehicle));
    }
});

export default connect(null, mapDispatchToProps)(Radio);

