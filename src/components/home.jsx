import React, { useState } from "react";
import "./styles/home.css";
import "./styles/style.css";
import "./styles/dropdown.css";
import logo from "./assests/icons/logo.png";
import arrow from "./assests/icons/arrow.png";
import griplines from "./assests/icons/griplines.svg";
import cross from "./assests/icons/cross.svg";
import home from "./assests/icons/home.svg";
import info from "./assests/icons/info.svg";
import mic from "./assests/icons/mic.svg";
import portfolionav from "./assests/icons/portfolionav.svg";
import reviewsnav from "./assests/icons/reviewsnav.svg";
import servicesnav from "./assests/icons/servicesrocket.svg";

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <div className="homemain">
        <div className="navbar">
          <div className="navleft">
            <img src={logo} alt="logo" />
            <p>
              <span className="colorChange">ADVAL</span> STUDIOS
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
          <div className="navrightmobile" onClick={toggleDropdown}>
            <img src={griplines} alt="Open Menu" />
          </div>
        </div>

        <div className={dropdownVisible ? "dropdown show" : "dropdown"}>
          <div className="navbar">
            <div className="navleft">
              <img src={logo} alt="logo" />
              <p>
                <span className="colorChange">ADVAL</span> STUDIOS
              </p>
            </div>

            <div className="navrightmobile" onClick={toggleDropdown}>
              <img src={cross} alt="Open Menu" />
            </div>
          </div>
          <ul className="navrightmobiledrop">
            <li>
              <img src={home} alt="Navigation Items" />
              Home
            </li>
            <li>
              <img src={servicesnav} alt="Navigation Items" />
              Services
            </li>
            <li>
              <img src={portfolionav} alt="Navigation Items" />
              Portfolio
            </li>
            <li>
              <img src={reviewsnav} alt="Navigation Items" />
              Reviews
            </li>
            <li>
              <img src={mic} alt="Navigation Items" />
              About
            </li>
            <li>
              <img src={info} alt="Navigation Items" />
              About
            </li>
          </ul>
        </div>

        <div className="homecenter">
          <h1 className="desktoponly">
            Building <span className="colorYellow">Your Brand</span> with You,
            For You <br />
            Let's Navigate <u>Together</u>.
          </h1>
          <h1 className="mobileonly">
            Building <span className="colorYellow">Your Brand</span> <br />
            with You, For You <br />
            Let's Navigate <u>Together</u>.
          </h1>
          <p>
            Our Agency is a one stop solution to all of your Digital problems.
            More than an agency, we are your partner in success, every step of
            the way anytime, anywhere
          </p>
          <button className="homecenterbutton">Free Consultation</button>
          <div className="homebottommobile">
            <button className="homebutton1">Our Portfolio</button>
          </div>
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
