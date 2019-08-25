import React from 'react';
import { Component } from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Pdf from '../cv-f.pdf'; 


class CV extends Component{
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
gotomain(){
if (this.state.redirect){
return <Redirect to='/' />
}}



  render(){
  return (
    <div>
                          
        {this.gotomain()}
                                                                     <br></br>
        <div className="maintext">
       
        <a className ="maintext" href = {Pdf} target = "_blank">Show PDF File </a>

           </div>
           
           <div class='App-text'>
        <button class='button' onClick={() => this.setRedirect()}>Main</button> 
        </div>
    </div>
     
  );
  }
}

export default CV;
