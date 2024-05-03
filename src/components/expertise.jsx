import React from "react";
import webdesign from "./assests/icons/webdesign.png";
import ExpertiseComponent from "./expertisecomponent";
import "./styles/expertise.css";
import "./styles/style.css";
export default function expertise() {
  return (
    <div className="expertisebody">
      <h1>Our Expertise</h1>
      <hr />
      <ExpertiseComponent
        imgname={webdesign}
        heading="Web Design"
        content="Imagine We're crafting your online home. It's not just about good looks; it's about making visitors say, “Wow, I love this place!” every time they drop by. While you just sit back and we put in the work for you."
        list_elem_1="Responsive Design"
        list_elem_2="Wireframing"
        list_elem_3="UX Writing"
        number="01."
      />
    </div>
  );
}
