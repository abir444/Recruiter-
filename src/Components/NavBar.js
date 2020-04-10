import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Container , Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import CurrentOpenings from './CurrentOpenings';
import JobOpeningForm from './JobOpeningForm';
import App from './App';
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

export default class NavBar extends Component {

  render(){
    return (

<ul>
    <nav>
    <label className="logo">Recruiter</label>
    <ul>
      <li><a href="./JobOpeningForm" className="active">New Openings</a></li>
      <li><a href="./CurrentOpenings">Current Openings</a></li>
      <li><a href="./PreviousOpenings">Previous Openings</a></li>
      
    </ul>
  </nav>
  </ul>


)
    }
}