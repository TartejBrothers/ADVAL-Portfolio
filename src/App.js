// App.js

import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";
import Expertise from "./components/expertise";
import Showcase from "./components/showcase";
import Designs from "./components/designs";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [animateTestimonial, setAnimateTestimonial] = useState(false);
  const designsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (designsRef.current) {
        const designsRect = designsRef.current.getBoundingClientRect();
        const designsTop = designsRect.top;

        // Check if designs section is in view
        if (designsTop < window.innerHeight) {
          setAnimateTestimonial(true);
        } else {
          setAnimateTestimonial(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isSafari || isIOS) {
      document.body.classList.add("no-animation");
    }
  }, []);

  return (
    <div className="App">
      <div id="home" className="section">
        <Home />
      </div>
      <div id="expertise" className="section">
        <Expertise />
      </div>
      <div id="showcase" className="section">
        <Showcase />
      </div>
      <div id="designs" className="section" ref={designsRef}>
        <Designs />
      </div>
      <div
        id="testimonial"
        className={`section ${animateTestimonial ? "slide-up" : ""}`}
      >
        <Testimonial />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <div id="footer" className="section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
