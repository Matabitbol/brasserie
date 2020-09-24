import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import{BeerProvider} from './context'

ReactDOM.render(
  <BeerProvider>
  <Router>
    <App />
    </Router>
  </BeerProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();