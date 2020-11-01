import React, { Component } from 'react';
import './App.css';
import '../config';


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