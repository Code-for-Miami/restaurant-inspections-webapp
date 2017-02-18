import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import Header from './components/Header'
import Counties from './components/CountiesComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counties />
      </div>
    );
  }
}

export default App;
