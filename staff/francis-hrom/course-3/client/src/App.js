import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Landing from "./screens/Landing";
import Cities from "./screens/Cities";
import Itinerary from "./screens/Itinerary";
import CreateAccount from "./screens/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/cities/:city" component={Itinerary} />
            <Route path="/cities" component={Cities} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
