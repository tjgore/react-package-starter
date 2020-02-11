import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tablio from 'tablio';
import 'tablio/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tablio/>
      </header>
    </div>
  );
}

export default App;
