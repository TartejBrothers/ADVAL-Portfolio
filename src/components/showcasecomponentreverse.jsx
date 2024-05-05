import React from "react";
import rectangle from "./assests/icons/rectangle.png";
import line from "./assests/icons/line.png";
import circle from "./assests/icons/circle.png";
import project from "./assests/showcase_pfp.png";
import lineandrec from "./assests/icons/lineandrect.png";
const showcasecomponentreverse = ({ heading, content, speaker, post }) => {
  return (
    <div className="showcasemain">
      <div className="showcaseright">
        <img src={project} />
      </div>
      <div className="showcaseleft">
        <img src={rectangle} />
        <div className="showcaseline"></div>
        <img src={circle} className="showcasecircle" />
      </div>
      <div className="showcasecenter">
        <h1>{heading}</h1>
        <div className="showcasecentercontent">
          <p>{content}</p>
          <p className="showcasecenterspeaker">
            - <p className="yellowshowcase">{speaker} </p>
            {post}
          </p>
        </div>
      </div>
    </div>
  );
};
export default showcasecomponentreverse;
