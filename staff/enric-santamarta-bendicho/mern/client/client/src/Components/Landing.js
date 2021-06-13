import React, { Component } from 'react';

//import {button} from '@material-ui/core';

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
            appartmentRanking: []
        }
    }
    
    render() {

        const { state: { hotelAdress, hotelName, hotelPrice, hotelRanking, appartmentRanking, appartmentName, appartmentPrice, appartmentAdress } } = this

        return (<div><h2>Hotel List</h2>
        <tr className="List"><th>Hotel Name </th><th>Hotel Adress </th><th>Hotel Price </th><th>Hotel Ranking </th></tr>
        <tr><td>{hotelName}</td><td>{hotelAdress}</td><td>{hotelPrice}</td><td>{hotelRanking}</td></tr>
        <h2>Appartment List</h2>
        <tr className="List"><th>Appartment Name </th><th>Appartment Adress </th><th>Appartment Price </th><th>Appartment Ranking </th></tr>
        <tr><td>{appartmentName}</td><td>{appartmentAdress}</td><td>{appartmentPrice}</td><td>{appartmentRanking}</td></tr></div>)
    }

}



export default Landing