import React, {Component} from "react";
import {Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import RegistrationFormTest from "./components/RegistrationFormTest";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import Help from "./components/Help";
import ProfileMenu from "./components/Profile/ProfileMenu";
import Profile from "./components/Profile/Profile";
import People from "./components/People/People";
import CreateProject from "./components/Project/CreateProject";
import ProjectList from "./components/Project/ProjectList";

import "./style/style.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: "relative", zIndex:1}}>
          <Route path="/" component={Navigation}/>
          <div style={{minHeight: '91.6vh'}}>
              <Route exact path="/" component={HomePage}/>
              <Route path="/registration" component={RegistrationFormTest}/>
              <Route path="/about" component={About}/>
              <Route path="/Help" component={Help}/>
              <Route path="/profile" component={ProfileMenu}/>
              <Route path="/profile/userinfo" component={Profile}/>
              <Route path="/people" component={People}/>
              <Route path="/projects" exact component={ProjectList}/>
              <Route path="/projects/create" component={CreateProject}/>
          </div>
          <Route path="/" component={Footer}/>
      </div>
    );
  }
}

export default App;
