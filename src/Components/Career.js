import React, { Component, useState } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import { Form, Card, Accordion, Alert,ProgressBar, Modal, Tab, Nav, Row, Button, Col, Badge, Popover, OverlayTrigger } from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Validation from './Validation';
import CareerNav from './CareerNav';
import { wait } from '@testing-library/react';

const completeStatus = () => (
 
    <Badge variant="primary">Need help?</Badge>
  
);

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
      url: "",
      files: [],
      progress : 0,
      loading : false,


    }
    
    // console.log(this.state.forJobTitl);
    console.log(this.state.progress)
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
//     validate = () =>{
//       let jobArray = [];
//       let FromApplicantJobTitle = this.state.resumeFor;
//       let Positions =this.state.data.map((val) =>{
//         jobArray.push(Positions(val));
//       })
//       if(FromApplicantJobTitle == jobArray){
//         return true;
//       }
// console.log(jobArray);
//     }

  //submit button
  Submit = e => {

    // this.state = {
    //   url: "",
    // }


    // const isValid = this.validate();
    // if (isValid == true){




  

/// handle save
let bucketName = "images";
let image = this.state.files[0];
let storageRef = firebase.storage().ref(`${bucketName}/${image.name}`)
let uploadTask = storageRef.put(image);
console.warn(uploadTask);
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  (snapShot) => {
    const progress = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100)
    
    this.setState({progress});
 
    this.setState({loading : true});
      
    setTimeout(() => {
      this.setState({loading : false});
    },2000)
   
  },
  (error) => {
    alert("Something went wrong, please try again!")
  },
  (push) => {
    // ?????????????????
    firebase.storage().ref(`${bucketName}`).child(image.name).getDownloadURL().then(url => {
      this.setState({url});

     firebase
      .database()
      .ref("resume")
      .push(
        {
        resumeFor: this.state.resumeFor,
        applicantName: this.state.applicantName,
        SkillsGithub: this.state.SkillsGithub,
        url: this.state.url
      
      })
      alert("Submitted!")
    })
  } 


)


e.preventDefault();


   
    console.log(this.progress);
    console.log(URL);
  
  // } 
  // else{
  //   alert("Please Enter Correct Job Position!")
  // }
  // console.log(isValid);
  
}


  render() {
    const {loading} = this.state;
    return (

      <div>

        <CareerNav />
        
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
                // <ProgressBar animated now={this.state.progress}  />
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
                <input type="file" id="custom-file-translate-scss" class="file-upload"
                  onChange={(e) => { this.setState({files: e.target.files}) }
                
                }


                  data-height="200" />
 



                 {/* <progress value={this.state.progress} max="100"/> */}
                 
              </div>

                <div className="space"></div>
                <Button variant="primary" type="submit" disabled={loading} > 
                  {loading && <i className="fa fa-refresh fa-spin"></i>}
                  {loading && <span>Loading!</span>}

                  {!loading && <span>Submit</span>}
                  {/* Submit */}
        </Button>

              </Form>


            </Card.Header>
          </div>
        </div>
      </div>

    )
  }
}