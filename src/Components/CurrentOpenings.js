import React, { Component } from 'react';
import './App.css';
import '../config';
import * as firebase from 'firebase';
import {Card,Accordion,Alert ,Button,Badge} from "react-bootstrap";
import NavBar from './NavBar';
import swal from 'sweetalert2';

// main component start from here



export default class CurrentOpenings extends Component {
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

this.delete = this.delete.bind(this);
}


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


sweetAleartFunction = () =>{
  new swal({
   title: "Application Deleted",
   text: "Application has been deleted successfully ",
   icon: "warning",
 });
} 

delete = (i) => {
  firebase.database().ref('profile').child(i.id).remove();
  this.sweetAleartFunction();
  this.componentDidMount();
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
{this.state.data.map((val,key)=>{
   return (
   
<div id={key}>

  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <Badge variant="info">job position</Badge>{' '}
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
        <Badge variant="danger" >deadline : {val.deadLine}</Badge>{''} 
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  <Button value={key} onClick={(i) =>this.delete(val)}variant="danger">Delete</Button> 
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
