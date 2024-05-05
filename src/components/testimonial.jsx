import React, { useRef } from "react";
import arrowleft from "./assests/icons/arrowleft.png";
import arrowright from "./assests/icons/arrowright.png";
import testimonial1 from "./assests/icons/testimonials1.png";
import testimonial2 from "./assests/icons/testimonials2.png";
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
