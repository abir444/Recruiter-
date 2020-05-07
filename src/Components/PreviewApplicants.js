import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Card,Accordion,Alert,Container ,Tab,Nav, Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Switch from "react-switch";

// main component start from here

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h1">Applicant detals</Popover.Title>
    <Popover.Content>
      Please Process the CV of <strong>Applicant</strong> Shedule an interview if applicable
    </Popover.Content>
  </Popover>
);
const Example = () => (
  <OverlayTrigger trigger="click" placement="left" overlay={popover}>
    <Badge variant="primary">Need help?</Badge>
  </OverlayTrigger>
);


export default class PreviewApplicants extends Component {
  ////
  constructor(){
    super();
    this.state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",  
    deadLine:          "", 
    url :              "",
    checked :         false,
    data:              []
  };
this.handleCheck = this.handleCheck.bind(this);
this.delete = this.delete.bind(this);
}

handleCheck(checked){
  this.setState({checked});
}

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
      console.log(snapShot.child)
    })
  })
}

/////////////// ??????????????????????


// }
///////////////////////

  delete = (i) => {
    firebase.database().ref('resume').child(i.id).remove();
  }


  render(){
    return (  
            
      <div>

         <NavBar />
<div className="container">
    <Alert variant="success">Good day!! We have <strong><Badge pill variant="danger" >  {this.state.data.length}</Badge>{''}</strong>  Applications to process!</Alert>

<div>
{this.state.data.map((val, key)=>{
  
   return (
   
<div id = {key}> 
{/* {console.log(id)} */}
  <Accordion defaultActiveKey="0">
  <Card>
{console.log(key)}
    <Card.Header>
  <div className="help">
            <Example />
          </div>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Badge variant="info">Job Position</Badge>{' '}
      <Badge variant="primary"> <strong className="space">{val.resumeFor}</strong></Badge>{' '}   
   
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
     <a href = {val.url} download>
     <Button variant="outline-primary">View Bio</Button>
     <img src={val.url || "https://via.placeholder.com/150.png/09f/fff%20C/O%20https://placeholder.com/"} alt ="Uploaded Resume" height="100" width= "100" />
     </a>
    
    
   </div>
   <Button value={key} onClick={(i) =>this.delete(val) }variant="danger">Received</Button> 
        </Card.Body>
    
    </Accordion.Collapse>
  </Card>
  </Accordion>
</div>
          
   )
})}
</div>

</div>

</div>

)
    }
  }
