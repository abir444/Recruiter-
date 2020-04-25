import React, { Component, useState } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import { Form, Card, Accordion, Alert, Modal, Tab, Nav, Row, Button, Col, Badge, Popover, OverlayTrigger } from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Validation from './Validation';



// main component start from here


export default class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeFor: "",
      applicantName: "",
      SkillsGithub: "",
      deadLine: "",
      data: [],
      forJobTitl: "",
      positionOverview: "",
      location: "",
      loveWorkingHere: "",
      url: '',
      files: [],


    }
    console.log(this.state.forJobTitl);

  }

    //get data to the web page
    componentDidMount() {
      var list = [];
      firebase
        .database()
        .ref("profile")
        .once("value")
        .then(snapShot => {
          snapShot.forEach(item => {
            list.push({
              id: item.key, ...item.val()
  
            });
            this.setState({ data: list });
          })
        })
    }
  

    // validation 
    // validate = () =>{
    //   let FromApplicantJobTitle = this.state.resumeFor;
    //   let Postions = this.state.data.f;

    //   if(FromApplicantJobTitle == Postions){
    //     return true;
    //   }
    // }


  // event for image upload
  handleChange = (files) => {
    this.setState({
      files: files,

    })
  }

  //submit button
  Submit = e => {

    e.preventDefault();
    // const isValid = this.validate();
    // if (isValid == true){
    let x = firebase;
    x
      .database()
      .ref("resume")
      .push({
        resumeFor: this.state.resumeFor,
        applicantName: this.state.applicantName,
        SkillsGithub: this.state.SkillsGithub,
        url: this.state.url

      })
    /// handle save
    let bucketName = "images";
    let image = this.state.files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/${image.name}`)
    let uploadTask = storageRef.put(image);
    console.warn(uploadTask);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        //progress
      },
      (error) => {
        alert("Something went wrong, please try again!")
      },
      () => {
        storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then(url => {
          console.log(url);
        })
      }


    )
    
  // } else{
  //   alert("Please Enter Correct Job Position!")
  // }
  // console.log(isValid);
  }



  render() {
    return (

      <div>

        <NavBar />
        
        <div className="container">
      
          <Alert variant="success">Current Openings!</Alert>
          <div>
            {this.state.data.map((val) => {
              return (

                <div>

                  <Accordion defaultActiveKey="1">
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          <Badge variant="info">Job Position</Badge>{' '}
                          <Badge variant="primary"> <strong className="space">{val.forJobTitl}</strong></Badge>{' '}

                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
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
          <hr />
          <div className="container2" >
            <Card.Header>
              <Alert variant="success">Submit Your Rsume!</Alert>
              <Form className="form" onSubmit={(e) => this.Submit(e)}>
                <Form.Row>
                  <Form.Group as={Row} controlId="forJobTitl">
                    <Form.Label><strong>Name Of the position</strong></Form.Label>
                    <Form.Control
                      onChange={e => this.setState({ resumeFor: e.target.value })} />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Row} controlId="forJobTitl">
                    <Form.Label><strong>Full Name</strong></Form.Label>
                    <Form.Control
                      onChange={e => this.setState({ applicantName: e.target.value })} />
                  </Form.Group>
                </Form.Row>


                <Form.Row>
                  <Form.Group as={Row} controlId="Cover Latter">
                    <Form.Label><strong>Skills and Github Link</strong></Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={e => this.setState({ SkillsGithub: e.target.value })} />
                  </Form.Group>
                </Form.Row>
                <div class="file-upload-wrapper">
                <input type="file" id="input-file-now-custom-2" class="file-upload"
                  onChange={(e) => { this.handleChange(e.target.files) }}


                  data-height="500" />
              </div>

                <div className="space"></div>
                <Button variant="primary" type="submit" >
                  Submit
        </Button>

              </Form>


            </Card.Header>
          </div>
        </div>
      </div>

    )
  }
}
