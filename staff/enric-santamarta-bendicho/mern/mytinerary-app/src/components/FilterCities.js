import React, { Component } from 'react'

class FilterCities extends Component {
    constructor() {
        super()
        this.state = {
            filter: ""
        }
    }

    handleChange = event => {
        const filter = event.target.value

        this.setState({
            filter
        })

        this.props.onChange(filter)
    }
    render() {

        return <div>
            <input type="text" name="filter" value={this.state.filter}
                onChange={this.handleChange} />
        </div>
    }

}

export default FilterCities