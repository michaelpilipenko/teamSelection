import React, {Component} from "react";
import {Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import RegistrationForm from "./components/RegistrationForm";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import "./style/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" component={Navigation}/>
          <div style={{minHeight: '91.6vh'}}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/registration" component={RegistrationForm}/>
            <Route path="/about" component={About}/>
          </div>
          <Route path="/" component={Footer}/>
      </div>
    );
  }
}

export default App;
