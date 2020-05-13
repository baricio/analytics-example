import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! lets try some events.
        </p>
        <Link to="/about" onclick="ga('send', 'event', 'link', 'click', 'about page');" >Know about this</Link>
      </header>
    </div>
  );
}

export default App;
