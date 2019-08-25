import React from 'react';
import { Component } from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class About extends Component{
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
        <div class='maintext'>
        <br></br>
       [ Code passionate , adaptable personality, motivated ,challenges lover , want always to <br></br>
         do it in better way , enthusiastic to contribute in a positive environment and as <br></br>
         well as develop my skills in coding ]
             <br></br><br></br>

           </div>
           <div class='App-text'>
        <button class='button' onClick={() => this.setRedirect()}>Main</button> 
        </div>
    </div>
     
  );
  }
}

export default About;
