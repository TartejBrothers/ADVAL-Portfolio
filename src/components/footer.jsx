import React from "react";
import "./styles/footer.css";
import logo from "./assests/icons/logo.png";
import arrowsubmit from "./assests/icons/arrowsubmit.svg";
import phone from "./assests/icons/phone.png";
import email from "./assests/icons/email.png";
export default function footer() {
  return (
    <div>
      <div className="footerwork" id="contact">
        <div className="footerworkleft">
          <div className="footerworklefthead">
            <img src={logo} alt="logo" />
            <h1>ADVAL</h1>
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
              <a href="#">
                <li>{">"} Home</li>
              </a>
              <a href="#">
                <li>{">"} Services</li>
              </a>
              <a href="#">
                <li>{">"} Portfolio</li>
              </a>
              <a href="#work">
                <li>{">"} Reviews</li>
              </a>
              <a href="#contact">
                <li>{">"} Book a Meeting</li>
              </a>
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
              <input type="email" placeholder="Enter address" />
              <button type="submit">
                <img src={arrowsubmit} alt="Submit Arrow" />
              </button>
            </form>
            <hr className="formline" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2024. Adval Studios. All rights reserved.</p>
      </div>
    </div>
  );
}
