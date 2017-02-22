import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import CountiesSelect from './components/CountiesComponents';
import BusinessesSelect from './components/BusinessesComponents';
import Inspections from './components/InspectionsComponents/Inspections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CountiesSelect/>
        <BusinessesSelect/>
        <Inspections />
      </div>
    );
  }
}

export default App;
