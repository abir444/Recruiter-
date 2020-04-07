import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Container , Row , Col} from "react-bootstrap";

const Nav = () => (
    <nav>
    <label className="logo">Recruiter</label>
    <ul>
      <li><a className="active" href="#">New Openings</a></li>
      <li><a href="#">Current Openings</a></li>
      <li><a href="#">Previous Openings</a></li>
    </ul>
  </nav>
)

export default Nav;