import React from "react";
import "./styles/footer.css";
import logo from "./assests/icons/logo.png";
import arrowsubmit from "./assests/icons/arrowsubmit.svg";
import phone from "./assests/icons/phone.png";
import email from "./assests/icons/email.png";
// import twitter from "./assests/icons/twitter.svg";
import linkedin from "./assests/icons/linkedin.svg";
import xlogo from "./assests/icons/x.png";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="footerwork" id="contact">
        <div className="footerworkleft">
          <div className="footerworklefthead">
            <img src={logo} alt="logo" />
            <h1>ADVAL </h1>
            <h1 className="whitecolor">STUDIOS</h1>
          </div>

          <div className="footerworkleftbody">
            <p>
              Your partner in success. Where luxury is made simple for anyone,
              anytime.
            </p>
          </div>
        </div>
        <div className="footerworkright">
          <div className="footerworkrightbody">
            <div className="footerworkrightheader">WHO WE ARE</div>
            <hr className="footerworkrightsplitter" />
            <ul>
              <li onClick={() => scrollToSection("home")}>{">"} Home</li>
              <li onClick={() => scrollToSection("expertise")}>
                {">"} Services
              </li>
              <li onClick={() => scrollToSection("showcase")}>
                {">"} Portfolio
              </li>
              <li onClick={() => scrollToSection("testimonial")}>
                {">"} Reviews
              </li>
              <li onClick={() => scrollToSection("contact")}>
                {">"} Book a Meeting
              </li>
            </ul>
          </div>
          <div className="footerworkrightbody">
            <div className="footerworkrightheader">CONTACT US</div>
            <hr className="footerworkrightsplitter" />
            <ul>
              <li>
                <img src={phone} alt="phone" />
                +91 9952613793
              </li>
              <li>
                <img src={email} alt="mail" id="mailicon" />
                Info@adval.com
              </li>
            </ul>
          </div>
          <div className="footerworkrightbody">
            <div className="footerworkrightheader">OUR PRICING?</div>
            <hr className="footerworkrightsplitter" />
            <form>
              <div className="formmain">
                <input type="email" placeholder="Enter address" />
                <button type="submit">
                  <img src={arrowsubmit} alt="Submit Arrow" />
                </button>
              </div>
              <hr className="formline" />
            </form>
          </div>
        </div>
        <div className="footerrightmost">
          <ul>
            {/* <li>
              <img src={twitter} alt="twitter" />
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/company/adval-studios/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/mayankk48?t=2Nyp4IkIdNdih_PsSx9MKg"
                rel="noreferrer"
                target="_blank"
              >
                <img src={xlogo} alt="X" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2024. Adval Studios. All rights reserved.</p>
      </div>
    </div>
  );
}
