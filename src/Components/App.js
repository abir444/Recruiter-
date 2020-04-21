import React, { Component, Props } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import JobOpeningForm from './JobOpeningForm';
import CurrentOpenings from './CurrentOpenings';
import Login from './Login';
import NavBar from './NavBar';
import { BrowseRouter, Route } from "react-router-dom";


import {Form,Container , Row , Col} from "react-bootstrap";
import Home from './Home';

export default class App extends Component{
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
    


  render(){
    return (



  <div>
   <NavBar />
    <div>
      {/* <Home /> */}
      {this.state.user ?  ( <Home/>) : (<Login />)}
    {/* <JobOpeningForm triggerJobOpeningForm={this.Submit}/> it is working */}
    </div>
  </div>
      
    );
  }
}
