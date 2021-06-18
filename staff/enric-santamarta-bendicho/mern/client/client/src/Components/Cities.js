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

function Cities() {



    return (<div><h2>City List</h2>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow><TableCell align="center">City Details</TableCell><TableCell align="center">City Routes</TableCell></TableRow>
                </TableHead>
                <TableBody>
                    <TableRow><TableCell align="center"></TableCell><TableCell align="center"></TableCell></TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <footer>
            <NavLink to='/' ><Button><img src={Home} alt="return home" /> </Button></NavLink>
        </footer>
    </div>)
}


export default Cities