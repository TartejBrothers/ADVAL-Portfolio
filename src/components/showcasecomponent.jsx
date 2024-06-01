import React from "react";
import rectangle from "./assests/icons/rectangle.png";

import circle from "./assests/icons/circle.png";

const showcasecomponent = ({
  heading,
  content,
  speaker,
  post,
  link,
  image,
}) => {
  return (
    <div className="showcasemain">
      <div className="showcaseleft">
        <img src={rectangle} alt="rectangle" />
        <div className="showcaseline"></div>
        <img src={circle} className="showcasecircle" alt="Circle" />
      </div>
      <div className="showcasecenter">
        <a href={link} target="_blank" rel="noreferrer">
          <h1>{heading}</h1>
        </a>
        <div className="showcasecentercontent">
          <p>{content}</p>
          <p className="showcasecenterspeaker">
            - <p className="yellowshowcase">{speaker} </p>
            {post}
          </p>
        </div>
      </div>
      <div className="showcaseright">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt="Project" />
        </a>
      </div>
    </div>
  );
};
export default showcasecomponent;
