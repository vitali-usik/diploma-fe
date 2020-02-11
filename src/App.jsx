import React from 'react';

import TypeScriptTest from './components/TypeScriptTest';
import TempTourDetails from './components/TempTourDetails';
import TempTourTable from './components/TempTourTable';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TypeScriptTest />
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <TempTourTable />
            </div>
            <div className="column eight wide">
              <TempTourDetails />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
