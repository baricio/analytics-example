import React from 'react';
import ReactGA from 'react-ga'
import {Link} from 'react-router-dom';
import './App.css';

const trackingId = "UA-115320538-3"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview('/about');

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <p>
          Hello! this page is an example for use analytics
        </p>
        <Link to="/">Back to home</Link>
      </header>
    </div>
  );
}

export default About;
