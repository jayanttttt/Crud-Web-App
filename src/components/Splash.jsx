import React, { Component } from "react";
import logo from "../img/logo.png";
import "./Splash.css";

export class Splash extends Component {
  render() {
    return (
      <div>
        <div className="loader_container">
          <img src={logo} alt="logo" className="loader" />
          <div className="anim"></div>
          <p className="splash_text">logo</p>
        </div>
      </div>
    );
  }
}

export default Splash;
