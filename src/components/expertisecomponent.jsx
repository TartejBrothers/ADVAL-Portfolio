import React from "react";
import "./styles/expertisecomponent.css";
const expertisecomponent = ({
  imgname,
  heading,
  content,
  list_elem_1,
  list_elem_2,
  list_elem_3,
  number,
}) => {
  return (
    <div className="expertisecomponent">
      <div className="leftexpertiseheader">
        <img src={imgname} alt="Icon" />
        <h3>{heading}</h3>
      </div>
      <div className="leftexpertisebody">
        <div className="leftexpertise">
          <p>{content}</p>
        </div>
        <div className="rightexpertise">
          <div className="rightexpertisetop">
            <ul>
              <li>{list_elem_1}</li>
              <li>{list_elem_2}</li>
              <li>{list_elem_3}</li>
            </ul>
          </div>
          <div className="rightexpertisebottom">
            <h5>{number}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default expertisecomponent;
