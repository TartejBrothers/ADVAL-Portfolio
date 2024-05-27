import React from "react";
import "./styles/designs.css";
import left1 from "./assests/designs/left1.png";
import left2 from "./assests/designs/left2.png";
import left3 from "./assests/designs/left3.png";
import left4 from "./assests/designs/left4.png";
import center1 from "./assests/designs/center1.png";
import center2 from "./assests/designs/center2.png";
import center3 from "./assests/designs/center3.png";

import right1 from "./assests/designs/right1.png";
import right2 from "./assests/designs/right2.png";
import right3 from "./assests/designs/right3.png";

import mobileleft1 from "./assests/designs/mobileleft1.png";
import mobileleft2 from "./assests/designs/mobileleft2.png";
import mobileleft3 from "./assests/designs/mobileleft3.png";
import mobileleft4 from "./assests/designs/mobileleft4.png";

import mobileright1 from "./assests/designs/mobileright1.png";
import mobileright2 from "./assests/designs/mobileright2.png";
import mobileright3 from "./assests/designs/mobileright3.png";
import mobileright4 from "./assests/designs/mobileright4.png";

export default function designs() {
  return (
    <div className="designsbody">
      <h1 className="commonheader">Our Designs</h1>
      <div className="designsmain">
        <div className="designleft">
          <img src={left1} alt="" />
          <img src={left2} alt="" />
          <img src={left3} alt="" />
          <img src={left4} alt="" />
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
      <div className="designsmobile">
        <div className="designleft">
          <img src={mobileleft1} alt="" />
          <img src={mobileleft2} alt="" />
          <img src={mobileleft3} alt="" />
          <img src={mobileleft4} alt="" />
        </div>
        <div className="designright">
          <img src={mobileright1} alt="" />
          <img src={mobileright2} alt="" />
          <img src={mobileright3} alt="" />
          <img src={mobileright4} alt="" />
        </div>
      </div>
    </div>
  );
}
