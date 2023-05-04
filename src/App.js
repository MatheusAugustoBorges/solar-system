import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <br />
        <p>Project Solar System</p>
        <br />
        <Header />
        <br />
        <br />
        <SolarSystem />
        <br />
        <br />
        <Missions />
      </main>
    );
  }
}

export default App;
