import React, { Component } from 'react';
import './Cities.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Home from './images/homeIcon.png'
import { NavLink } from 'react-router-dom'
//import FilterForms from './FilterForms'

//separar cada componente

class RetrieveCities extends Component {
    constructor(){
        super()
        this.state = {
            cities:[]
        }
    }
    componentDidMount() {
        this.fetchCities()
        // this.setState({listCitiesNames = cities.map((cities) => <ul> {cities.name} </ul>)})
        this.timer = setInterval(() => this.fetchCities(), 5000)
    }
    componentWillUnmounte() {
        this.timer = null
    }
    fetchCities = () => {
        this.setState({ ...this.state, isFetching: true })
        fetch('http://localhost:5000/cities/all')
            .then(response => response.json())
            .then(result => this.setState({
                cities: result,
                isFetching: false
            }) /*, () => { this.renderCities() } */)
            .catch(e => console.log(e))
    }
    render() {

        const{state:{cities}} = this

        return (
            {cities}
        )
    }
}


class FilterForms extends Component {
    constructor(props) {
        super(props)
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

class VisibleCities extends Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            filteredCities: []
     
           
        }
    }
    componentWillMount() {

        const { state: { cities } } = this

        this.setState({
            cities,
            filteredCities: cities
        })
    }


    filterCities = (citiesFilter) => {
        let filteredCities = this.state.cities
        filteredCities = filteredCities.filter((cities) => {
            let cityName = cities
            return cityName.indexOf(
                citiesFilter.name()) !== -1
        })
        this.setState({ filteredCities })
    }

    render(){
        return ( 
        <RetrieveCities cities={this.state.filteredCities} match={this.props.match} onChange={this.filterCities}/>
        )
    }

} 






class Cities extends Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            isFetching: false,
            filteredCities: [],
            listCitiesNames: [],
            listCitiesCountries: []
        }
    }

    componentWillMount() {

        const { state: { cities } } = this

        this.setState({
            cities,
            filteredCities: cities
        })
    }


    filterCities = (citiesFilter) => {
        let filteredCities = this.state.cities
        filteredCities = filteredCities.filter((cities) => {
            let cityName = cities
            return cityName.indexOf(
                citiesFilter.name()) !== -1
        })
        this.setState({ filteredCities })
    }

   /* renderCities() {

        let { state: { cities,listCitiesNames,listCitiesCountries } } = this

        listCitiesNames = cities.map((cities) => <ul> {cities.name} </ul>)

        listCitiesCountries = cities.map((cities) => <ul> {cities.country} </ul>) 
    
        this.setState({listCitiesCountries,listCitiesNames})
    }

    /*    <this.renderCities cities={this.state.filteredCities} match={this.props.match} onChange={this.filterCities} />

    } */

    render() {

        const {state:{cities}} = this

        const listCitiesNames = cities.map((cities) => <ul> {cities.name} </ul>)

        const listCitiesCountries = cities.map((cities) => <ul> {cities.country} </ul>) 

       
        return <div><h2>City List</h2>
            <Box>
                <FilterForms />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow><TableCell align="center">City</TableCell><TableCell align="center">Country</TableCell></TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow><TableCell align="center">{listCitiesNames}</TableCell><TableCell align="center">{listCitiesCountries}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <footer>
                    <NavLink to='/' ><Button><img src={Home} alt="return home" /> </Button></NavLink>
                </footer>
            </Box>
        </div>
    }
}





export default Cities