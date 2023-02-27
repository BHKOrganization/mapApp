import React from "react";
import "./submitButton.css";
import { getDistance } from "../../functions/getDistance";

const handleClick = (location) => {
  () => {
    getDistance(location.lati, location.longi, 36.884, 30.704);
  };
};

const SubmitButton = (props) => {
  return (
    <>
      <div
        className="buttonContainer"
        onClick={() => handleClick(props.location)}
      >
        <h3 className="buttonTitle">{props.title}</h3>
      </div>
    </>
  );
};

export default SubmitButton;
