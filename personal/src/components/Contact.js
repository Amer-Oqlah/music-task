import React from 'react';
import { Component } from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class Contact extends Component{
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
        <div>
       
         <p class='maintext'> Email :   ameroqlah1979@gmail.com <br></br><br></br>
    
          <a href="https://github.com/Amer-Oqlah " target="_blank">github/Amer Oqlah</a><br></br><br></br>
          <a href="https://linkedin.com/in/amer-oqlah-5964b418a" target="_blank">LinkedIn/Amer Oqlah</a><br></br><br></br>
          Phone:    +962 789519802
          </p>

           </div>
           
           <div class='App-text'>
        <button class='button' onClick={() => this.setRedirect()}>Main</button> 
        </div>
    </div>
     
  );
  }
}

export default Contact;
