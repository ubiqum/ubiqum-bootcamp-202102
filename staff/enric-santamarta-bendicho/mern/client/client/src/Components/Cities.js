import React, { Component } from 'react';


class Cities extends Component{
    constructor(){
    super()
    this.state = {
        cityDetails:[],
        cityRoutes:[]
    }
    }

    render(){

    const{state:{cityDetails,cityRoutes}} = this

    return(<div><h1>City List</h1><tr><th>City Details</th><th>City Routes</th></tr><tr><td>{cityDetails}</td><td>{cityRoutes}</td></tr></div>) }
}

export default Cities