import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Landing from "./screens/Landing";
import Cities from "./screens/Cities";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/cities" component={Cities} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
