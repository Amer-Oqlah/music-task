import React from 'react';
import { Component } from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

const list =[{
    projectName: "KidsEdu",
    description :"Educational game for kids",
    url :"https://www.youtube.com/watch?v=-ELpLNaLhko&feature=youtu.be",
    projectId:0
},{
    projectName: "Etbokhly",
    description :"Tender for personal chefs",
    url :"https://www.youtube.com/watch?v=9ATcNz1NnrU&feature=youtu.be",
    projectId:1
},{
    projectName: "FetchCrypto",
    description :"MOBILE APP -Fetching The latest cypto currencies information and shows them in appealed way",
    url :"https://github.com/Amer-Oqlah/FetchCrypto",
    projectId:2
}

]

class Projects extends Component{
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

    <div className="maintext">
    { list.map(function(item) {
    return (<div>
    <span>{item.projectId+1}- </span>
        <span>
<a href={item.url} target = "_blank">{item.projectName}</a>
</span><br></br> ******
   <span> {item.description}</span>
    </div>);
    })}

    </div>

    <div>  
           <div class='App-text'>
        <button class='button' onClick={() => this.setRedirect()}>Main</button> 
        </div>
    </div>
     </div>
  );
  }
}

export default Projects;