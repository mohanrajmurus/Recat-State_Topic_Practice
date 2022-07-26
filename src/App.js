import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
//import Scoreboard from './Scoreboard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
