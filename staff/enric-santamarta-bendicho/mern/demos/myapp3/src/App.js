import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  handleLogin(workerName, password) {
    console.log('HI ' + workerName + ' How are you doing?'
      + ' Your Password is :' + password)

    this.setState({workerName})

  }

  render() {

   const {state: {workerName}} = this

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Spriengfield Nuclear Central</h1>
          <Login onSubmit={this.handleLogin.bind(this)} />
          {workerName && <p>HI {workerName} How are you doing?</p>}
        </header>
      </div>
    )
  }
}


export default App;
