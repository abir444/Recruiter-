import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Container , Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";

// declaring state
// state = {
//   forJobTitl:        "",
//   positionOverview:  "",
//   location:          "",
//   loveWorkingHere:   ""   
// };






// main component start from here



export default class CurrentOpenings extends Component {
  ////
  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",   
    data:              []
  };

componentDidMount(){
  firebase
  .database()
  .ref("profile")
  .once("value")
  .then(snapShot => {
    snapShot.forEach(item => {
      this.state.data.push(item.val())
    })
  });
};
Submit = e => {
  e.preventDefault();

  firebase
  .database()
  .ref("profile")
  .push({
    forJobTitl:        this.state.forJobTitl,
    positionOverview:  this.state.positionOverview,
    location:          this.state.location,
    loveWorkingHere:   this.state.loveWorkingHere   

  });
};
componentDidMount(){
  firebase
  .database()
  .ref("profile")
 .once("value")
  .then(snapShot => {
    snapShot.forEach(item => {
      this.state.data.push({
        id: item.key,...item.val()
      });
    })
  })
}



  render(){
    return (
      <div>
         <NavBar />

<div className="container">


</div>
</div>
)
    }
  }
