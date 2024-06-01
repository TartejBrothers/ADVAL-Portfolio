import React from "react";
import "./styles/contact.css";
import footertop from "./assests/icons/footertop.svg";
export default function contact() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          <a href="https://calendly.com/advalstudios" target="blank">
            <button className="booknow">Book Meeting Now</button>
          </a>
          <button
            className="bookservices"
            onClick={() => scrollToSection("expertise")}
          >
            Check Out Services
          </button>
        </div>
      </div>
      <img src={footertop} className="footertopimg" alt="Footer Design" />
    </div>
  );
}
