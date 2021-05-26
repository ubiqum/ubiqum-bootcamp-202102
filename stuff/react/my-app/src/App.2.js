import logo from './logo.svg';
import './App.css';
import Login from './Login'

function App() {
  function handleLogin(username, password) {
    console.log(username, password)
  }

  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login onSubmit={handleLogin}/>
      </header>
    </div>
}

export default App;
