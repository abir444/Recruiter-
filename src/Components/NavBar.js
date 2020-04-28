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

  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",  
    deadLine:          "", 
    data:              [],
  };

  componentDidMount(){
    var list = [];
    firebase
    .database()
    .ref("resume")
   .once("value")
    .then(snapShot => {
      snapShot.forEach(item => {
        list.push({
          id: item.key,...item.val()
          
        });
        this.setState({data:list});
        // console.log(snapShot.child)
      })} ) }

// componentDidMount =  ()  => {
//         var list = [];
//         firebase
//         .database()
//         .ref("profile"+"resume")
//        .once("value")
//         .then(snapShot => {
//           snapShot.forEach(item => {
//             var kjkj = snapShot.numChildren();
//             list.push({
//               id: item.key,...item.val()
              
//             });
//             this.setState({Jdata:list});
//             console.log(snapShot.child)
//           })} ) }



  
  render(){
    return (

<ul>
    <nav>
    <label className="logo">Recruiter</label>
    <ul>
      <li><a href="./JobOpeningForm" className="active">New Openings</a></li>
      <li><a href="./CurrentOpenings">Current Openings</a></li>
      <li><a href="./PreviewApplicants">Preview Applicants<strong><Badge pill variant="danger" >  {this.state.data.length}</Badge>{''}</strong></a></li>
      <li><a href="./Signup">New member !</a></li>
    </ul>
  </nav>
  </ul>


)
    }
}