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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setDropdownVisible(false);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("expertise")}>Services</li>
              <li onClick={() => scrollToSection("projects")}>Portfolio</li>
              <li onClick={() => scrollToSection("testimonial")}>Reviews</li>
              <li onClick={() => scrollToSection("contact")}>About</li>
              <li>
                <a
                  href="https://calendly.com/advalstudios/talk-to-us"
                  target="blank"
                >
                  <button className="contactbtn">Contact</button>
                </a>
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
            <li onClick={() => scrollToSection("home")}>
              <img src={home} alt="Navigation Items" />
              Home
            </li>
            <li onClick={() => scrollToSection("expertise")}>
              <img src={servicesnav} alt="Navigation Items" />
              Services
            </li>
            <li onClick={() => scrollToSection("showcase")}>
              <img src={portfolionav} alt="Navigation Items" />
              Portfolio
            </li>
            <li onClick={() => scrollToSection("testimonial")}>
              <img src={reviewsnav} alt="Navigation Items" />
              Reviews
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <img src={mic} alt="Navigation Items" />
              About
            </li>
            <li>
              <img src={info} alt="Navigation Items" />
              <a
                href="https://calendly.com/advalstudios/talk-to-us"
                target="blank"
              >
                Contact
              </a>
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
          <a href="https://calendly.com/advalstudios/talk-to-us" target="blank">
            <button className="homecenterbutton">Free Consultation</button>
          </a>
          <div className="homebottommobile">
            <button
              className="homebutton1"
              onClick={() => scrollToSection("showcase")}
            >
              Our Portfolio
            </button>
          </div>
        </div>
        <div className="homebottom">
          <button
            className="homebutton1"
            onClick={() => scrollToSection("showcase")}
          >
            Our Portfolio
          </button>
          <button
            className="homebutton2"
            onClick={() => scrollToSection("showcase")}
          >
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
