import React, { Component,useState } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Card,Accordion,Alert,Modal ,Tab,Nav, Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";



// main component start from here


export default class Career extends Component {
  constructor(props){
  super(props);
  this.state = {
    resumeFor:        "",
    applicantName:  "",
    coverLetter:   "",  
    deadLine:      "", 
    data:              [],
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",  
    image : [],
    url: '',
  }
  //  this.handleChange = this.handleChange.bind(this);
  //  this.handleUpload = this.handleUpload.bind(this);
}

// handleChange = e =>{
//   if(e.target.files[0]){
//     const image = e.target.files[0];
    
//   }
// }

handleUpload = e => {

  

  const {image} = this.state;
  const uploadtask= firebase.storage.ref(`images/${image.name}`).put(image);
  uploadtask.on('state_changed', 
  (snapShot) =>{

  } ,
  (error) =>{
      console.log(error);
  },
  ()=>{
      firebase.storage.ref('images').child(image.name).getDownloadURL().then(url =>{
        console.log(url);
        this.setState({url});
        
        
  })
  });
}

Submit = e => {

  e.preventDefault();
 
  let x= firebase;
  x
  .database()
  .ref("resume")
  .push({
    resumeFor:        this.state.resumeFor,
    applicantName:  this.state.applicantName,
    coverLetter:   this.state.coverLetter,
    image      :    this.state.image,
    
    // uploadedCV:          this.state.uploadedCV    

  })
  
}
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
      // .....

      // ......
   )
})}
</div>
<hr/>
<div className="container2" >
<Card.Header>
<Alert variant="success">Submit Your Rsume!</Alert>
<Form className="form" onSubmit={(e) =>this.handleUpload(e) }>
<Form.Row>
<Form.Group as={Row} controlId="forJobTitl">
      <Form.Label><strong>Name Of the position</strong></Form.Label>
      <Form.Control
       onChange={e =>this.setState ({resumeFor:e.target.value})}/>
    </Form.Group>
    </Form.Row>
    
    <Form.Row>
<Form.Group as={Row} controlId="forJobTitl">
      <Form.Label><strong>Full Name</strong></Form.Label>
      <Form.Control
       onChange={e =>this.setState ({applicantName:e.target.value})}/>
    </Form.Group>
    </Form.Row>

  
    <Form.Row>
<Form.Group as={Row} controlId="Cover Latter">
    <Form.Label>Cover Letter</Form.Label>
    <Form.Control as="textarea" rows="3" onChange={e => this.setState({coverLetter:e.target.value})}/>
    </Form.Group>
    </Form.Row>
    <div class="file-upload-wrapper">
   <input type="file" id="input-file-now-custom-2" class="file-upload"
   onChange={e=>this.setState({image:e.target.files[0]})}
   
  data-height="500" />
</div>
<div className="space"></div>
    <Button variant="primary" type="submit" >
          Submit
        </Button>{console.log(this.state.image)}

</Form>
</Card.Header>
</div>
</div>
</div>

)
    }
  }
