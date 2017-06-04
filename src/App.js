import React, {Component} from "react";
import {Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import RegistrationFormTest from "./components/RegistrationFormTest";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import Help from "./components/Help"
import ProfileMenu from "./components/Profile/ProfileMenu"
import Profile from "./components/Profile/Profile"

import "./style/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" component={Navigation}/>
          <div style={{minHeight: '91.6vh'}}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/registration" component={RegistrationFormTest}/>
            <Route path="/about" component={About}/>
            <Route path="/Help" component={Help}/>
            <Route path="/profile" component={ProfileMenu}/>
            <Route path="/profile/userinfo" component={Profile}/>
          </div>
          <Route path="/" component={Footer}/>
      </div>
    );
  }
}

export default App;
