import React, { Component, Props } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import JobOpeningForm from './JobOpeningForm';
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
}


logout() {
    firebase.auth().signOut();
}

render() {
    return (
      <div>
      <NavBar/>
      <div className="col-md-6">
        <h1>This is home page</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
      </div>
    )
           
      
          }
      
      }
      