import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
      </main>
    );
  }
}

export default App;
