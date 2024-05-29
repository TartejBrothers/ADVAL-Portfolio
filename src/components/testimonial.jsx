import React, { useRef } from "react";
import arrowleft from "./assests/icons/arrowleft.png";
import arrowright from "./assests/icons/arrowright.png";
import testimonial1 from "./assests/icons/testimonials1.png";
import testimonial2 from "./assests/icons/testimonials2.png";
import testimonial3 from "./assests/icons/testimonials3.png";
import "./styles/testimonial.css";
export default function Testimonial() {
  const cardWrapperRef = useRef(null);

  const arrowPrev = () => {
    const cardWrapper = cardWrapperRef.current;
    const widthToScroll = cardWrapper.children[0].offsetWidth;
    cardWrapper.scrollLeft -= widthToScroll;
  };

  const arrowNext = () => {
    const cardWrapper = cardWrapperRef.current;
    const widthToScroll = cardWrapper.children[0].offsetWidth;
    cardWrapper.scrollLeft += widthToScroll;
  };

  return (
    <div className="testiominalsmain">
      <h3>TESTIMONIALS</h3>
      <h2>
        Read What Others
        <br />
        Have to Say
      </h2>

      <div className="wrapper">
        <div className="card-wrapper" ref={cardWrapperRef}>
          <div className="card-item">
            <div className="testimonial">
              <img src={testimonial1} alt="Testimonial" />
              <p>
                “Adval Studios crafted a logo that’s not just a mark; it’s a
                true reflection of what we stand for at Margin Check. They
                understood that we’re all about helping students stay on track.
                Thanks to them, every time students see our logo, they think
                ‘reliability’—and that’s a win in our book. Hats off to the team
                for making it happen!”
              </p>
              <h4>Sukh Singh Oberio</h4>
              <p className="testimonialpost">Executive Engineer</p>
            </div>
          </div>
          <div className="card-item">
            <div className="testimonial">
              <img src={testimonial2} alt="Testimonial" />
              <p>
                “Big thanks to Adval Studios from everyone at Adlife Trust. They
                delivered a website that truly reflects our heart and mission.
                It's easy for supporters to donate and see the difference
                they're making. We've built more trust and connection, all
                thanks to the Adval team. They really went the
                extra mile for us!”
              </p>
              <h4>Kovalli Dolly</h4>
              <p className="testimonialpost">NGO Owner</p>
            </div>
          </div>
          <div className="card-item">
            <div className="testimonial">
              <img src={testimonial3} alt="Testimonial" />
              <p>
                “We're thrilled with the website Adval Studios put together for
                us at Homevest. It really shows off our properties and the happy
                faces of our clients. It’s exactly what we needed to help people
                see what we’re all about. The team at Adval was spot on in
                capturing our vibe and making our site feel like home.”
              </p>
              <h4>Dave Clint</h4>
              <p className="testimonialpost">Homevest Realestate</p>
            </div>
          </div>
          <div className="card-item">
            <div className="testimonial">
              <img src={testimonial1} alt="Testimonial" />
              <p>
                “Adval Studios created a website that hits all the marks for our
                student community, it’s a one-stop shop for managing their
                schedules, attendance, and even monthly expenses. It’s exactly
                what we needed to help students stay organized and productive.
                The Adval team listened to our needs and delivered a solution
                that works perfectly.”
              </p>
              <h4>Harit Manon</h4>
              <p className="testimonialpost">Executive Head</p>
            </div>
          </div>
          <div className="card-item">
            <div className="testimonial">
              <img src={testimonial2} alt="Testimonial" />
              <p>
                “Adval Studios team really captured what Perfect Sign and Infra
                is all about—design and construction excellence. Now our site
                showcases our services perfectly, from blueprints to buildings.
                It’s just what we needed to show off our work and attract the
                right clients. Working with Adval Studios was
                straightforward and enjoyable.”
              </p>
              <h4>Millind Sharma</h4>
              <p className="testimonialpost">Perfect Sign & Infra Owner</p>
            </div>
          </div>
          <div className="card-item">
            <div className="testimonial">
              <img src={testimonial3} alt="Testimonial" />
              <p>
                “We're thrilled with the website. It’s exactly what we needed to
                showcase our NFTs & build trust with our customers. The design
                is clean making it easier for buyers to see why they should
                invest with us. The Adval team was a breeze to work with, truly
                understanding what we were aiming for and
                delivering it perfectly.”
              </p>
              <h4>Michelle</h4>
              <p className="testimonialpost">Managing Director</p>
            </div>
          </div>
        </div>
        <div className="bottomarrows">
          <button className="arrow prev" onClick={arrowPrev}>
            <img src={arrowleft} alt="Previous" />
          </button>
          <button className="arrow next" onClick={arrowNext}>
            <img src={arrowright} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}
