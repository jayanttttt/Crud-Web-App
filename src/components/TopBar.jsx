import React from "react";
import logo from "../img/logo2.png";
import HardDrives from "../img/HardDrives.png";
import "./TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <React.Fragment>
      <div className="main_box">
        <Link to="/">
          <div className="box_left">
            <img src={logo} alt="logo" />
            <p>home</p>
          </div>
        </Link>
        <div className="box_right">
          <img src={HardDrives} alt="drives" />
          <p>all post</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBar;
