import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Main from './components/main.js'
import About from './components/about.js'
import Contact from './components/Contact'
import Projects from './components/Projects.js';
import CV from './components/CV.js';
import ReactAudioPlayer from 'react-audio-player';





class App extends Component{

  
  render(){
  return (
                                 <div> <ReactAudioPlayer
                                   src="music.mp3"
                                   autoPlay
                                   controls
                                  />
                                
  <Router>
    <Switch>
       <Route exact path="/" component={Main} /> 
       <Route exact path="/About" component={About} /> 
       <Route exact path="/Contact" component={Contact} /> 
       <Route exact path="/Projects" component={Projects} /> 
       <Route exact path="/CV" component={CV} />
       <Route exact path="*" component={Main} />

  </Switch> 
  
  </Router>
  </div>
  );
  }
}

export default App;
