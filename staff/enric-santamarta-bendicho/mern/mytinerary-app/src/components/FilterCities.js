import React, { Component } from 'react'

class FilterCities extends Component {
    constructor() {
        super()
        this.state = {
            citiesFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            citiesFilter: e.target.value
        })
        this.props.onChange(Event.target.value)
    }
    render() {

        return <div>
            <input type="text" id="filter" value={this.state.citiesFilter}
                onChange={this.handleChange} />
        </div>
    }

}

export default FilterCities