import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <p>
          Hello! this page is an example for use analytics
        </p>
        <Link to="/" className="navigate">Back to home</Link>
      </header>
    </div>
  );
}

export default About;
