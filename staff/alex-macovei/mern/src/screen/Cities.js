import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import homeIcon from './homeIcon.png'

export default class Cities extends Component {
    render() {
        return (
            <div className='container'>
            <footer>
                <div>
                <Link to='/'><img className='homeI' src={homeIcon} alt="HomeIcon" /></Link>
                </div>
            </footer>
        </div>
        )
    }
}
