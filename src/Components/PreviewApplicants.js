import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Card,Accordion,Alert,Container ,Tab,Nav, Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";


// main component start from here



export default class PreviewApplicants extends Component {
  ////
  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",  
    deadLine:          "", 
    url :              "",
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



// Submit = e => {
//   e.preventDefault();

//   firebase
//   .database()
//   .ref("profile")
//   .push({
//     forJobTitl:        this.state.forJobTitl,
//     positionOverview:  this.state.positionOverview,
//     location:          this.state.location,
//     loveWorkingHere:   this.state.loveWorkingHere,
//     deadLine:          this.state.deadLine    

//   });
// };
componentDidMount(){
  var list = [];
  firebase
  .database()
  .ref("resume")
 .once("value")
  .then(snapShot => {
    snapShot.forEach(item => {
      var kjkj = snapShot.numChildren();
      list.push({
        id: item.key,...item.val()
        
      });
      this.setState({data:list});
      console.log(snapShot.child)
    })
  })
}
/////////////// ??????????????????????
delete = () => {
  firebase.database()
  .ref("resume")
  .once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(id) {
      id.ref.remove(); 
      console.log("Removed!");
    })
  })
}

  render(){
    return (
            
      <div>

         <NavBar />
<div className="container">
    <Alert variant="success">Good day!! We have <strong><Badge pill variant="danger" >  {this.state.data.length}</Badge>{''}</strong>  Applications to process!</Alert>
<div>
{this.state.data.map((val)=>{
   return (
   
<div id="val">

  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Badge variant="info">Job Position</Badge>{' '}
      <Badge variant="primary"> <strong className="space">{val.resumeFor}</strong></Badge>{' '}
       {/* <strong className="space">{val.forJobTitl}</strong> */}
       {/* <Badge variant="success" className="float-right">In Progress</Badge>{''}  */}
     
       {/* <p className="DeadLine">{val.deadLine}</p> */}

      
   
    </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <h1><strong>{val.applicantName}</strong></h1>
        <label><b>Skills and Github Link</b></label>
        <p>{val.SkillsGithub}</p>
        {/* show the pdf */}
        {/* <div>
          <img src={`${val.url}`}
        </div> */}
   {/* <p>{console.log(this.state.data.length)}</p> */}
   <div className="showBio">
    <img src={val.url || "https://via.placeholder.com/150.png/09f/fff%20C/O%20https://placeholder.com/"} alt ="Uploaded Resume" height="100" width= "100" />
    
   </div>
   <Button onClick={this.delete.bind(val)} variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
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
