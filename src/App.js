import React from "react";
import "./App.css";
import Home from "./components/home";
import Expertise from "./components/expertise";
import Showcase from "./components/showcase";
import Designs from "./components/designs";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
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
      <div id="designs" className="section">
        <Designs />
      </div>
      <div id="testimonial" className="section">
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
