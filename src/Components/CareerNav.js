import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Container , Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import CurrentOpenings from './CurrentOpenings';
import JobOpeningForm from './JobOpeningForm';
import Login from './Login';
import App from './App';
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

export default class CareerNav extends Component {

  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",  
    deadLine:          "", 
    data:              [],
  };



  
  render(){
    return (

<ul>
    <nav>
    <label className="logo"><a href='/'>Recruiter</a></label>
    <ul>
      <li><a href="./App" className="active">Members Login</a></li>
      <li><a href="/" className="active">Career Page</a></li>
      
    </ul>
  </nav>
  </ul>


)
    }
}