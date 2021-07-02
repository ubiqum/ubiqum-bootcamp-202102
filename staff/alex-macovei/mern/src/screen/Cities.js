import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import homeIcon from './homeIcon.png';


export default class Cities extends Component {

    constructor() {
        super();
        this.state = {
            cityFilter: '',
            loading: true,
            myCities: [],
        }
    }

    async componentDidMount() {
        const api = "http://localhost:5000/cities/all";
        const response = await fetch(api);
        const data = await response.json();
        this.setState({ myCities: data, filteredCities: data, loading: false, })
    }

    handleChange(event) {
        this.setState({
            cityFilter: event.target.value
        })
    }

    render() {
        let filteredCities = this.state.myCities.filter(
            (city) => {
                //return city.name.substring(0,this.state.cityFilter.length).toLowerCase().indexOf(this.state.cityFilter.toLowerCase()) !== -1
                return city.name.toLowerCase().startsWith(this.state.cityFilter.toLowerCase())
            }
        );

        if (this.state.loading) {
            return <div><h1 style={{ textAlign: "center" }}>...Page is loading...</h1></div>
        }
        if (!this.state.myCities.length) {
            return (
                <div><h1 style={{ color: "red", textAlign: "center" }}>...An error has occurred while trying to load the data...</h1>
                    <div>
                        <Link to='/'><img className='homeI' src={homeIcon} alt="HomeIcon" /></Link>
                    </div>
                </div>

            )
        }

        return (
            <div className='container'>
                <footer>
                    <div>
                        <label htmlFor="filter">Filter by City: </label>
                        <input type="text" id="filter"
                            value={this.state.cityFilter}
                            onChange={this.handleChange.bind(this)}
                            placeholder="Search city..."
                        />

                    </div>
                    <div>
                        {filteredCities.map(city => (
                            <div>
                                <div>{city.name}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link to='/'><img className='homeI' src={homeIcon} alt="HomeIcon" /></Link>
                    </div>
                </footer>
            </div>
        )
    }
}
