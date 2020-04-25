import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobOpeningForm from './Components/JobOpeningForm';
import NavBar from './Components/NavBar';
import CurrentOpenings from './Components/CurrentOpenings';
import PreviewApplicants from './Components/PreviewApplicants';
import Career from './Components/Career';
import {  Route, Link,Router, BrowserRouter } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';



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
      <Route exact path="/" component={Career} />
      <Route path="/JobOpeningForm" component={JobOpeningForm} />
      <Route path="/CurrentOpenings" component={CurrentOpenings} />
      <Route path="/PreviewApplicants" component={PreviewApplicants} />
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));