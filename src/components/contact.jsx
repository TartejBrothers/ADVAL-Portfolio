import React from "react";
import "./styles/contact.css";
import footertop from "./assests/icons/footertop.svg";
export default function contact() {
  return (
    <div className="contactmainwhole">
      <div className="contactmain">
        <h1>
          GOT A PROBLEM?
          <br />
          LET'S <h1 className="yellowcolor">SOLVE</h1>
        </h1>
        <p>
          ADVAL Studios is a one stop solution to all of your problem. A place
          Where Luxury is in Simplicity. More than an agency, we are your
          partner in success, every step of the way - anytime, anywhere
        </p>
        <div className="contactbuttons">
          <button className="booknow">Book Meeting Now</button>
          <button className="bookservices">Check Out Services</button>
        </div>
      </div>
      <img src={footertop} className="footertopimg" alt="Footer Design" />
    </div>
  );
}
