import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        React and Mobx setup
      </div>
    );
  }
}

export default App;
