import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Form,Container , Row ,Button, Col,Badge,Popover,OverlayTrigger} from "react-bootstrap";
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from "react-router-dom";

// declaring state
// state = {
//   forJobTitl:        "",
//   positionOverview:  "",
//   location:          "",
//   loveWorkingHere:   ""   
// };






// main component start from here
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h1">Fill Up the form</Popover.Title>
    <Popover.Content>
      Please fill up the <strong>Current</strong> openings. Always double check the deadlines
    </Popover.Content>
  </Popover>
);
const Example = () => (
  <OverlayTrigger trigger="click" placement="left" overlay={popover}>
    <Badge variant="primary">Need help?</Badge>
  </OverlayTrigger>
);
// Submit = e => {
//   e.preventDefault();
// }

export default class CurrentOpenings extends Component {
  ////
  state = {
    forJobTitl:        "",
    positionOverview:  "",
    location:          "",
    loveWorkingHere:   "",   
  };

componentDidMount(){
  firebase
  .database()
  .ref("profile")
  .push({
    forJobTitl:        "sample title",
    positionOverview:  "sample position",
    location:          "sample location",
    loveWorkingHere:   "sample detail"   
    

  })
}
Submit = e => {
  e.preventDefault();

  firebase
  .database()
  .ref("profile")
  .push({
    forJobTitl:        this.state.forJobTitl,
    positionOverview:  this.state.positionOverview,
    location:          this.state.location,
    loveWorkingHere:   this.state.loveWorkingHere   

  });
};
  /////

  render(){
    return (
<div className="container">

    <p>this is  a new page</p>
{/* <Badge variant="primary">Post a new Position</Badge>{' '}
<div className="help">
<Example />
</div>

<hr/>
<Form className="form" onSubmit={(e) =>this.Submit(e) }>
<Form.Row>
<Form.Group as={Row} controlId="forJobTitl">
      <Form.Label><strong>Job Title</strong></Form.Label>
      <Form.Control onChange={e =>this.setState ({forJobTitl:e.target.value})}/>
    </Form.Group>
    </Form.Row>
    
    <Form.Row>
<Form.Group as={Row} controlId="positionOverview">
      <Form.Label><strong>Position Overview</strong></Form.Label>
      <Form.Control onChange={e => this.setState({positionOverview:e.target.value})}/>
    </Form.Group>
    </Form.Row>
    <Form.Row>
<Form.Group as={Row} controlId="location">
      <Form.Label><strong>Location</strong></Form.Label>
      <Form.Control as="select" onChange={e => this.setState({location:e.target.value})}>
      <option>Austin</option>
      <option>Silicon valley</option>
      <option>Shanghai</option>
      <option>Sea Beach</option>
      <option>Rooftops</option>
    </Form.Control>
    </Form.Group>
    </Form.Row>
    <Form.Row>
<Form.Group as={Row} controlId="loveWorkingHere">
    <Form.Label>Why You’ll Love Working Here</Form.Label>
    <Form.Control as="textarea" rows="3" onChange={e => this.setState({loveWorkingHere:e.target.value})}/>
    </Form.Group>

    </Form.Row>
    <Button variant="primary" type="submit">
          Submit
        </Button>
</Form> */}

</div>
)
    }
  }
