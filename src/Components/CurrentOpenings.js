import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Card,Accordion,Alert,Container ,Tab,Nav, Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";


// main component start from here



export default class CurrentOpenings extends Component {
  ////
  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",  
    deadLine:          "", 
    data:              []
  };

// componentDidMount(){
//   firebase
//   .database()
//   .ref("profile")
//   .once("value")
//   .then(snapShot => {
//     snapShot.forEach(item => {
//       this.state.data.push(item.val())
//     })
//   });
// };



Submit = e => {
  e.preventDefault();

  firebase
  .database()
  .ref("profile")
  .push({
    forJobTitl:        this.state.forJobTitl,
    positionOverview:  this.state.positionOverview,
    location:          this.state.location,
    loveWorkingHere:   this.state.loveWorkingHere,
    deadLine:          this.state.deadLine    

  });
};
componentDidMount(){
  var list = [];
  firebase
  .database()
  .ref("profile")
 .once("value")
  .then(snapShot => {
    snapShot.forEach(item => {
      list.push({
        id: item.key,...item.val()
        
      });
      this.setState({data:list});
    })
  })
}


  render(){
    return (
            
      <div>

         <NavBar />
<div className="container">
<Alert variant="success">Current Openings!</Alert>
<div>
{this.state.data.map((val)=>{
   return (
   
<div>

  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Badge variant="info">Job Position</Badge>{' '}
      <Badge variant="primary"> <strong className="space">{val.forJobTitl}</strong></Badge>{' '}
       {/* <strong className="space">{val.forJobTitl}</strong> */}
       {/* <Badge variant="success" className="float-right">In Progress</Badge>{''}  */}
     
       {/* <p className="DeadLine">{val.deadLine}</p> */}

      
   
    </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <h1><strong>{val.forJobTitl}</strong></h1>
        <h5>{val.location}</h5>
        <label><b>Position Overview</b></label>
        <p>{val.positionOverview}</p>
        <label><b>Why You’ll Love Working Here</b></label>
        <p>{val.loveWorkingHere}</p>
        <Badge variant="danger" >Deadline : {val.deadLine}</Badge>{''} 
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
</div>
      
   )
})}
</div>

{console.log(this.state.data)}

</div>

</div>

)
    }
  }
