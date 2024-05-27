import React from "react";
import "./styles/home.css";
import "./styles/style.css";
import logo from "./assests/icons/logo.png";
import arrow from "./assests/icons/arrow.png";
import griplines from "./assests/icons/griplines.svg";
export default function home() {
  return (
    <div>
      <div className="homemain">
        <div className="navbar">
          <div className="navleft">
            <img src={logo} alt="logo" />
            <p>
              <p className="colorChange">ADVAL</p> STUDIOS
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
          <div className="navrightmobile">
            <img src={griplines} alt="Open Menu" />
          </div>
        </div>

        <div className="homecenter">
          <h1>
            Building <h1 className="colorYellow">Your Brand</h1> with You, For
            You <br />
            Let's Navigate <u>Together</u>.
          </h1>
          <p>
            Our Agency is a one stop solution to all of your Digital problems.
            More than an agency, we are your partner in success, every step of
            the way anytime, anywhere
          </p>
          <button>Free Consultation</button>
        </div>
        <div className="homebottom">
          <button className="homebutton1">Our Portfolio</button>
          <button className="homebutton2">
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
