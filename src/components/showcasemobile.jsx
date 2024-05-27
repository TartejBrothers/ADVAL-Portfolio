import React from "react";
import rectangle from "./assests/icons/rectangle.png";
import circle from "./assests/icons/circle.png";
import project from "./assests/showcase_pfp.png";

const showcasecomponent = ({ heading, content, speaker, post }) => {
  return (
    <div className="showcasemain">
      <div className="showcaseleft">
        <img src={rectangle} alt="Rectangle" />
        <div className="showcaseline"></div>
        <img src={circle} className="showcasecircle" alt="Circle" />
      </div>
      <div className="showcasecenter">
        <h1>{heading}</h1>
        <div className="showcaseright">
          <img src={project} alt="Project" />
        </div>
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
export default showcasecomponent;
