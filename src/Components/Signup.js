import React, { Component, Props } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import JobOpeningForm from './JobOpeningForm';
import CurrentOpenings from './CurrentOpenings';
import NavBar from './NavBar';
import { BrowseRouter, Route } from "react-router-dom";
import { Card } from "react-bootstrap";
import Home from './Home';
import Career from './Career';
import CareerNav from './CareerNav';
import swal from 'sweetalert2';

class Signup extends Component {
  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      emailErr:'',
      password: '',
      passwordErr:''
    };
  }

  resetForm = () => {
    document.getElementById("myForm").reset();
    }


  sweetAleartFunctionN = () =>{
    new swal({
     title: "Something wrong",
     text: "Please try again with proper format",
     icon: "error",
   });
 } 

 sweetAleartFunctionP = () =>{
  new swal({
   title: "New user created",
   text: this.state.email,
   icon: "success",
 });
} 

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signup(e) {
    e.preventDefault();
    
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
   this.sweetAleartFunctionP();
   e.preventDefault();
   this.resetForm();
    }).then((u) => { console.log(u) })
      .catch((error) => {
        this.sweetAleartFunctionN();
      })
  }

////////////////////



/////////////


  render() {
    return (
      <div className="col-md-6">
        <CareerNav/>
        
  <Card.Header>
        <form>
          
          <div class="form-group">
            
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} 
            onChange={this.handleChange} type="email" name="email" 
            class="form-control" id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            errorText={this.state.emailErr}
            placeholder="Enter email" />            
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={this.state.password}
             onChange={this.handleChange} type="password" name="password" 
             class="form-control" id="exampleInputPassword1" 
             errorText={this.state.passwordErr}
             placeholder="Password" />
          </div>
          {/* <button type="submit" onClick={this.login} class="btn btn-primary">Login</button> */}
          <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
        </form>
        </Card.Header>
      </div>
    );
  }
}
export default Signup;
