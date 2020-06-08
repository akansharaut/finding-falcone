import React, { Component } from 'react';
import '../styles/dropdown.css';
import { getPlanet } from '../actions/index';
import { connect } from 'react-redux';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ""
        }

        this.handleDropdownChange = this.handleDropdownChange.bind(this)
    }

    handleDropdownChange(heading, e) {
        const key = heading.replace(" ", "_");
        this.props.getPlanet({[key]: e.target.value});;
    }

    render() {
        const { planets, heading } = this.props;
        console.log(this.props);    

        return (
            <div className="custom-select">
                <h4>{heading}</h4>
                <select onChange={this.handleDropdownChange.bind(this, heading)}>
                    <option>Select</option>
                    {planets.map((planet, id) => (
                        <option value={planet.name} key={id}>{planet.name}</option>
                    ))}
                </select>
            </div>
        );
    };
}


const mapDispatchToProps = dispatch => ({
    getPlanet: planet => {
        dispatch(getPlanet(planet));
    }
});

export default connect(null, mapDispatchToProps)(Dropdown);

