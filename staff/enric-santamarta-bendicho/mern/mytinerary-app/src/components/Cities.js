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
import FilterCities from './FilterCities';

//separar cada componente

class Cities extends Component {
    constructor(){
        super()
        this.state = {
            isFetching:false,
            cities:[],
            citiesFilter:""
        }
    }
    componentDidMount(){
        this.fetchCities()
        this.timer = setInterval(() => this.fetchCities(), 5000)
    }

    componentWillUnmount(){
        this.timer = null
    }

    fetchCities = () => {this.setState({ ...this.state, isFetching: true })
    fetch('http://localhost:5000/cities/all')
        .then(response => response.json())
        .then(result => this.setState({
            cities: result,
            isFetching: false}))
        .catch(e => console.log(e))
    }


    render() { 

      const {state: {cities, isFetching }} = this

      const listCitiesNames = cities.map((cities) => <ul> {cities.name} </ul>)

      const listCitiesCountries = cities.map((cities) => <ul> {cities.country} </ul>)

    return <div><h2>City List</h2>
        <Box>
        <FilterCities />
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