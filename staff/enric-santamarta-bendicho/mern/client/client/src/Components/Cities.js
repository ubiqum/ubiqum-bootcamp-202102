import React, { Component } from 'react';
import './Cities.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Cities extends Component {
    constructor() {
        super()
        this.state = {
            cityDetails: [],
            cityRoutes: []
        }
    }

    render() {

        const { state: { cityDetails, cityRoutes } } = this

        return (<div><h2>City List</h2>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow><TableCell align="center">City Details</TableCell><TableCell align="center">City Routes</TableCell></TableRow>
                </TableHead>
                <TableBody>
                    <TableRow><TableCell align="center">{cityDetails}</TableCell><TableCell align="center">{cityRoutes}</TableCell></TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>)
    }
}

export default Cities