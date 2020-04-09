import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Container , Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import CurrentOpenings from './CurrentOpenings';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class NavBar extends Component {

  render(){
    return (
<ul>
    <nav>
    <label className="logo">Recruiter</label>
    <ul>
      <li><Link to={"JobOpeningForm"} className="active">New Openings</Link></li>
      <li><Link to={"./CurrentOpenings"}>Current Openings</Link></li>
      <li><Link to={"./PreviousOpenings"}>Previous Openings</Link></li>
    </ul>
  </nav>
  </ul>
)
    }
}