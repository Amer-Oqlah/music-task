import React from 'react';
import { Component } from 'react';
import './main.css';
import About from './about'
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";



class Main extends Component{
    state = {
        redirect: false
      }
      setRedirect = (value) => {
        this.setState({
          redirect: value
        })
      }
  gotoabout(){
    if (this.state.redirect){
      var direction="/"+this.state.redirect;
    return <Redirect to= {direction}/>
  }

}
  render(){
  return (
    <div>
                                  
    {this.gotoabout()}
        <div class='maintext'>
             Amer Oqlah <br></br>
           web developer
           </div>
        <div>
         <img class="imag" src="./IMG_4991.jpg"   />        
        </div>
        <div class='App-text'>
        <button class='button'  onClick={() => this.setRedirect("About")}>About</button> 
        <button class='button' onClick={() => this.setRedirect("Projects")}>Projects</button>
        <button class='button' onClick={() => this.setRedirect("Contact")}>Contact</button> 
        <button class='button' onClick={() => this.setRedirect("CV")}> CV Document</button>
        </div>
        
       
        </div>
     
  );
  }
}

export default Main;
