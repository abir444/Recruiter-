import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobOpeningForm from './Components/JobOpeningForm';
import NavBar from './Components/NavBar';
import CurrentOpenings from './Components/CurrentOpenings';
import PreviousOpenings from './Components/PreviousOpenings';
import {  Route, Link,Router, BrowserRouter } from "react-router-dom";



const routing = (
  <BrowserRouter>
    <div>
      {/* <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/JobOpeningForm">Users</Link>
        </li>
        <li>
          <Link to="/CurrentOpenings">Contact</Link>
        </li>
      </ul> */}
      <Route exact path="/" component={App} />
      <Route path="/JobOpeningForm" component={JobOpeningForm} />
      <Route path="/CurrentOpenings" component={CurrentOpenings} />
      <Route path="/PreviousOpenings" component={PreviousOpenings} />
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));