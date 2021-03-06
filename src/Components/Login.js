import React, { Component, Props } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import JobOpeningForm from './JobOpeningForm';
import CurrentOpenings from './CurrentOpenings';
import NavBar from './NavBar';
import { BrowseRouter, Route } from "react-router-dom";
import {Form,Card,Accordion,Alert,Container ,Tab,Nav, Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import Home from './Home';
import Career from './Career';
import CareerNav from './CareerNav';
import swal from 'sweetalert2';



class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      emailErr:"",
      password: '',
      passwordErr:''
    };
  }

  sweetAleartFunctionN = () =>{
    new swal({
     title: "Wrong credentials",
     text: "Please Enter with correct credentials",
     icon: "error",
   });
 } 


 sweetAleartFunctionP = () =>{
  new swal({
   title: "You're in!",
   text: "Welcome!",
   icon: "success",
 });
} 
// ...........clear the text after submitting.............
resetForm = () => {
 document.getElementById("myForm").reset();
 }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.sweetAleartFunctionP();
    }).catch((error) => {
      this.sweetAleartFunctionN();
    });
  }


      

////////////////////


/////////////


  render() {
    return (
      <div className="col-md-5">
        <CareerNav/>
        

  <Card.Header>
  <form >
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          {/* <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button> */}
        </form>

    </Card.Header>



      </div>
    );
  }
}
export default Login;
