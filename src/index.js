import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import JobOpeningForm from './Components/JobOpeningForm';
import NavBar from './Components/NavBar';
import CurrentOpenings from './Components/CurrentOpenings';
import {  Route, Link,Router,BrowserRouter } from "react-router-dom";
import Home from './Components/Home';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Route path={"/"} component={App} ></Route>
    <Route path={"JobOpeningForm"} component={JobOpeningForm} ></Route>
    <Route path={"CurrentOpenings"} component={CurrentOpenings} ></Route>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
