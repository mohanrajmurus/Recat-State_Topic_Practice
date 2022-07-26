import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Scoreboard />
        </div>
      </div>
    );
  }
}

export default App;
