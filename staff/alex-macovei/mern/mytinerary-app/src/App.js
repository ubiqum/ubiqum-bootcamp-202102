import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './screen/Landing'
import Cities from './screen/Cities'
import { BrowserRouter, Route, } from 'react-router-dom'

function App() {
  return ( 
    <BrowserRouter>
      <Route title='linkLandingPage' exact path='/' component={Landing} />
      <Route title='linkCitiesPage' exact path='/cities' component={Cities} />
    </BrowserRouter>
      
  );
}

export default App;
