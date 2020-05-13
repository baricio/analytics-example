import React from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function clickLink() {
  ReactGA.event({
    category: 'Link',
    action: 'click',
    label: 'go to about'
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! lets try some events.
        </p>
        <Link to="/about" onClick={clickLink} >Know about this</Link>
      </header>
    </div>
  );
}

export default App;
