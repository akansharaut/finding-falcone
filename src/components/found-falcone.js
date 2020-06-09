import React, { Component } from 'react';
import { getPlanetName } from '../reducers/index';
import { connect } from 'react-redux';

class FoundFalcone extends Component {
    render() {
        const {planetName} = this.props;

        return (
            <div className="found-falcone">
                <h1>Finding Falcone!</h1>
                <h4>Success! Congratulations on Finding Falcone King Shan is mighty pleased</h4>
                <h3>Time Taken: </h3>
                <h3>Planet Found: {planetName}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    planetName: getPlanetName(state)
});

export default connect(mapStateToProps)(FoundFalcone);
