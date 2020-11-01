import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import { Form, Row, Button, Badge, Popover, OverlayTrigger } from "react-bootstrap";
import NavBar from './NavBar';
import swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

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
    <Badge variant="primary">need help?</Badge>
  </OverlayTrigger>
);




export default class JobOpeningForm extends Component {
 constructor(){
super ();
  this.state = {
    forJobTitl: "",
    positionOverview: "",
    location: "",
    loveWorkingHere: "",
    deadLine: "",
    additionalContent: "",
    mustKnow:"",
    data: [],
    visible : true,
  }
  // this.sweetAleartFunction =  this.sweetAleartFunction.bind(this);
}

  
  componentDidMount() {
    firebase
      .database()
      .ref("profile")
      .once("value")
      .then(snapShot => {
        snapShot.forEach(item => {
          this.state.data.push({
            id: item.key, ...item.val()
          });
        })

      })
  }
  // ............alert after submitting...........
  sweetAleartFunction = () =>{
     new swal({
      title: "Good job!",
      text: "The job has been posted!",
      icon: "success",
    });
  } 
// ...........clear the text after submitting.............
 resetForm = () => {
  document.getElementById("myForm").reset();
  }





  Submit = e => {
let title = this.state.forJobTitl;

// ...camelCase function...
function camelize(str) {
  return str.replace(/\W+(.)/g, function(match, chr)
   {
        return chr.toUpperCase();
    });
}
///////////
var mydate = new Date(this.state.deadLine);
function dateFormat(){
 let ok= mydate.getDate()+"."+ mydate.getMonth()+"."+mydate.getFullYear();
  return ok;


}





// ....check for URL....
let link = this.state.positionOverview;
function urlify(link) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return link.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
}

    firebase
      .database()
      .ref("profile")
      .push({
        forJobTitl: camelize(title),
        positionOverview: urlify(link),
        location: this.state.location,
        loveWorkingHere: this.state.loveWorkingHere,
        deadLine: dateFormat(mydate),
        additionalContent: this.state.additionalContent,
        mustKnow: this.state.mustKnow,
        
      });     
      this.sweetAleartFunction();
      
      e.preventDefault();
      this.resetForm();
     
  };


  /////

  render() {
    return (
      <div>
        <NavBar />


        <div className="container">

          <Badge variant="primary">post a new position</Badge>{' '}
          <div className="help">
            <Example />          
          </div>
          {console.log(this.state)}
          <hr />
          <Form className="form" id="myForm"  onSubmit={(e) => this.Submit(e)} defaultValue="Reset">
            <Form.Row>
              <Form.Group as={Row} controlId="forJobTitl">
                <Form.Label><strong>Job Title</strong></Form.Label>
                <Form.Control onChange={e => this.setState({ forJobTitl: e.target.value })} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Row} controlId="positionOverview">
                <Form.Label><strong>Position Overview</strong></Form.Label>
                <Form.Control as="textarea"  placeholder="Position details" onChange={e => this.setState({ positionOverview: e.target.value })} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Row} controlId="mustKnow">
                <Form.Label><strong>Must have skills</strong></Form.Label>
                <Form.Control placeholder="e.g react,firebase..skills/experience " onChange={e => this.setState({ mustKnow: e.target.value })} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Row} controlId="additionalContent">
                <Form.Label><strong>Work Responsibilities</strong></Form.Label>
                <Form.Control placeholder="What suppose to do by the employee" onChange={e => this.setState({ additionalContent: e.target.value })} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Row} controlId="location">
                <Form.Label><strong>Location</strong></Form.Label>
                <Form.Control as="select" onChange={e => this.setState({ location: e.target.value })}>
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
                <Form.Control as="textarea" rows="3" onChange={e => this.setState({ loveWorkingHere: e.target.value })} />
              </Form.Group>

            </Form.Row>

            <Form.Row>
              <Form.Group as={Row} controlId="deadLine">
                <Form.Label>Mention the dead line.</Form.Label>
                <Form.Control id="dateF" type="date" rows="3" data-date-format="MM/DD/YYYY"
                 onChange={e => this.setState({ deadLine: e.target.value })} />
              </Form.Group>

            </Form.Row>


            <Button variant="primary" type="submit"  >
              Submit
        </Button>
            {/* {console.log(this.state.data)} */}
          </Form>
        </div>
      </div>
    )
  }
}
