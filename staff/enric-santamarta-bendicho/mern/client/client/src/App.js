import Landing from './Components/Landing'
import Cities from './Components/Cities'
import SearchBar from './Components/SearchBar';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import { Component } from 'react';
import { Button } from '@material-ui/core';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Button variant="contained" color="secondary"><NavLink className="inactive" activeClassName="active" to='/Landing'>Landing</NavLink></Button>
          <Button variant="contained" color="secondary"><NavLink className="inactive"  activeClassName="active" to='/Search'>Search City</NavLink></Button>
          <Button variant="contained" color="secondary"><NavLink className="inactive"  activeClassName="active" to='/Cities'>Cities</NavLink></Button>
          <Switch>
            <Route exact path='/Search' component={SearchBar} />
            <Route exact path='/Landing' component={Landing} />
            <Route exact path='/Cities' component={Cities} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
