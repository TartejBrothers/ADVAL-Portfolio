import React, { useEffect } from "react";
import "./styles/home.css";
import "./styles/style.css";
import logo from "./assests/icons/logo.png";
import arrow from "./assests/icons/arrow.png";
import griplines from "./assests/icons/griplines.svg";

export default function Home() {
  useEffect(() => {
    const listItems = document.querySelectorAll(".navright ul li");

    listItems.forEach((item) => {
      const handleMouseEnter = () => {
        item.style.animation = "none";
        setTimeout(() => {
          item.style.animation = "slideUp 1s forwards";
        }, 0);
      };

      item.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
      };
    });
  }, []);

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
          <div className="navrightmobile">
            <img src={griplines} alt="Open Menu" />
          </div>
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
