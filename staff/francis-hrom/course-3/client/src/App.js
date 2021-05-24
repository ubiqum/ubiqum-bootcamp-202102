import { BrowserRouter, Route } from "react-router-dom";
// ? use case scenarios of Switch
import Landing from "./screens/Landing";
import Cities from "./screens/Cities";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/cities" component={Cities} />
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
