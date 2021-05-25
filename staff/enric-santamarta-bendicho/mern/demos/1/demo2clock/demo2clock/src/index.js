
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() { //invoked inmediatly after a component is mounted
    this.timerID = setInterval(() => this.tick(), 
    3000) //here you can modify the updating of the rendering in ms
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() { //updates the class function state
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));


