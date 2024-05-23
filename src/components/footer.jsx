import React from "react";
import "./styles/footer.css";
import logo from "./assests/icons/logo.png";
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
            <div className="footerworkrightheader">WHERE WE WORK</div>
            <hr className="footerworkrightsplitter" />
            <ul>
              <li>
                <img src="images/icons/phone.png" alt="phone" />
                +91 9827199614
              </li>

              <li>
                <img src="images/icons/mail.png" alt="mail" id="mailicon" />
                perfectsignninfra@gmail.com
              </li>
            </ul>
          </div>
          <div className="footerworkrightbody">
            <div className="footerworkrightheader">FOLLOW US</div>
            <hr className="footerworkrightsplitter" />
            <p>
              For more Regular updates and event announcements. Make sure to
              follow us:
            </p>
            <div className="socials">
              <img src="images/icons/facebookfooter.svg" alt="facebook" />
              <img src="images/icons/linkedinfooter.svg" alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright © 2024. Adval Studios. All rights reserved.</p>
      </div>
    </div>
  );
}
