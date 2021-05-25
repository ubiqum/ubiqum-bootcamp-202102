import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleLogin(username, password) {
    console.log(username, password)

    this.setState({ username })
  }

  render() {
    const { state: { username }} = this

    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login onSubmit={this.handleLogin.bind(this)} />
        { username && <p>Hello, {username}!</p>}
      </header>
    </div>
  }
}

export default App;
