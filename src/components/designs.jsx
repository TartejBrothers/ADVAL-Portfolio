import React from "react";
import "./styles/designs.css";
import left1 from "./assests/designs/left1.png";
import left2 from "./assests/designs/left2.png";
import left3 from "./assests/designs/left3.png";
import center1 from "./assests/designs/center1.png";
import center2 from "./assests/designs/center2.png";
import center3 from "./assests/designs/center3.png";
import center4 from "./assests/designs/center4.png";
import right1 from "./assests/designs/right1.png";
import right2 from "./assests/designs/right2.png";
import right3 from "./assests/designs/right3.png";
export default function designs() {
  return (
    <div className="designsbody">
      <h1 className="commonheader">Our Designs</h1>
      <div className="designsmain">
        <div className="designleft">
          <img src={left1} alt="" />
          <img src={left2} alt="" />
          <img src={left3} alt="" />
        </div>
        <div className="designcenter">
          <img src={center1} alt="" />
          <img src={center2} alt="" />
          <img src={center3} alt="" />
        </div>
        <div className="designright">
          <img src={right1} alt="" />
          <img src={right2} alt="" />
          <img src={right3} alt="" />
        </div>
      </div>
    </div>
  );
}
