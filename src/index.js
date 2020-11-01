import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobOpeningForm from './Components/JobOpeningForm';
import CurrentOpenings from './Components/CurrentOpenings';
import Signup from './Components/Signup';
import PreviewApplicants from './Components/PreviewApplicants';
import Career from './Components/Career';
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
      <Route exact path="/" component={Career} />
      {/* //// need to check logged in or not */}
      <Route exact path="/App" component={App} />
      <Route path="/JobOpeningForm" component={JobOpeningForm} />
      <Route path="/Signup" component={Signup} />
      <Route path="/CurrentOpenings" component={CurrentOpenings} />
      <Route path="/PreviewApplicants" component={PreviewApplicants} />
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));