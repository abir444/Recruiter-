import React, { Component, Props } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import JobOpeningForm from './JobOpeningForm';
import NavBar from './NavBar';


import {Form,Container , Row , Col} from "react-bootstrap";

export default class App extends Component{

  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   ""   
  }

componentDidMount(){
  firebase
  .database()
  .ref("profile")
  .push({
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   ""   
    

  })
}
Submit = e => {
  e.preventdefault();

  firebase
  .database()
  .ref("profile")
  .push({
    forJobTitl:        this.state.forJobTitl,
    positionOverview:  this.state.positionOverview,
    location:          this.state.location,
    loveWorkingHere:   this.state.loveWorkingHere   

  })
}

  render(){
    return (

  <div>
   <NavBar />
    <div>
    <JobOpeningForm Component={this.props.jobForm}/>
    </div>
  </div>
      
    );
  }
}
