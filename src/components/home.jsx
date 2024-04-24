import React from "react";
import "./styles/style.css";
import logo from "./assests/icons/logo.png";

export default function home() {
  return (
    <div>
      <div className="homemain">
        <div className="navbar">
          <div className="navleft">
            <img src={logo} alt="logo" />
            <p>
              <p className="colorChange">ADVAL</p>SOLUTIONS
            </p>
          </div>
          <div className="navright">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Reviews</li>
              <li>About</li>
              <li>
                <button className="contactbtn">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
