import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


class RenderAlbum extends React.Component  {

state={
  redirect:false
}
    returnTomain(){
      this.setState({
        redirect:true
      })        
}
goToMain(){
  if(this.state.redirect){
  return <Redirect to={"/"}/>  
  }
}
    render(){
        return (
            <div className="App">
            All Albums
           <br/>
            {this.goToMain()}
             {console.log(this.props.location.state.data)}
             {this.props.location.state.data.map((item,key)=>
                   
              <li className="li" key={key}>{item.title} - {item.date_released} -for- {item.artist_name.name} <br/></li>
             
             )}
             <br/>
             
              <button onClick={() => this.returnTomain()}>main</button> 

            </div>
          )            
}
}
export default RenderAlbum;
