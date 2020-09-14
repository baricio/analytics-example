import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from "history";
import TagManager from 'react-gtm-module'

const history = createBrowserHistory();
const tagManagerArgs = {
  gtmId: process.env.REACT_APP_TRACKING_TAG_ID
}
ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
TagManager.initialize(tagManagerArgs)

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname + location.search }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}></Route>
      <Route path="/about" component={About}></Route>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
