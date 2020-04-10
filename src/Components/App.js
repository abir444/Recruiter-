import React, { Component, Props } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import JobOpeningForm from './JobOpeningForm';
import CurrentOpenings from './CurrentOpenings';
import NavBar from './NavBar';
import { BrowseRouter, Route } from "react-router-dom";


import {Form,Container , Row , Col} from "react-bootstrap";
import Home from './Home';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (



  <div>
   <NavBar />
    <div>
      <Home />
    {/* <JobOpeningForm triggerJobOpeningForm={this.Submit}/> it is working */}
    </div>
  </div>
      
    );
  }
}
