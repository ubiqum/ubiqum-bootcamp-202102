import './App.css';
import Landing from './Components/Landing'
import Cities from './Components/Cities'
import SearchBar from './Components/SearchBar';
import { BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import { Component } from 'react';

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
       <div className="App">
         <button><Link to='/Landing'>Landing</Link></button>
         <button><Link to='/'>Search City</Link></button>
         <button><Link to='/Cities'>Cities</Link></button>
         <Switch>
           <Route exact path='/' component={SearchBar} />
           <Route exact path='/Landing' component={Landing} />
           <Route exact path='/Cities' component={Cities} />
         </Switch>
       </div>
      </BrowserRouter>
    )
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SearchBar />
      <CityList />
      <Landing />
      </header>
    </div>
  );
} 

export default App;*/
