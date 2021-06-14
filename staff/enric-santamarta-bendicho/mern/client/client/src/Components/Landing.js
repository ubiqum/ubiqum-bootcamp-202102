import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





class Landing extends Component {
    constructor() {
        super()
        this.state = {
            hotelName: [],
            hotelAdress: [],
            hotelPrice: [],
            hotelRanking: [],
            appartmentName: [],
            appartmentPrice: [],
            appartmentAdress: [],
            appartmentRanking: [],
            
        }
    }

    retrieveHotelList() { }

    retrieveAppartmentList() { }

    render() {


        const { state: { hotelAdress, hotelName, hotelPrice, hotelRanking, appartmentRanking, appartmentName, appartmentPrice, appartmentAdress } } = this

        return (<div><h2>Hotel List</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow><TableCell align="center">Hotel Name </TableCell><TableCell align="center">Hotel Adress </TableCell><TableCell align="center">Hotel Price </TableCell><TableCell align="center">Hotel Ranking </TableCell></TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow><TableCell align="center">{hotelName}</TableCell><TableCell align="center">{hotelAdress}</TableCell><TableCell align="center">{hotelPrice}</TableCell><TableCell align="center">{hotelRanking}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h2>Appartment List</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow><TableCell align="center">Appartment Name </TableCell><TableCell align="center">Appartment Adress </TableCell><TableCell align="center">Appartment Price </TableCell><TableCell align="center">Appartment Ranking </TableCell></TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow><TableCell align="center">{appartmentName}</TableCell><TableCell align="center">{appartmentAdress}</TableCell><TableCell align="center">{appartmentPrice}</TableCell><TableCell align="center">{appartmentRanking}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
    }


}

export default Landing