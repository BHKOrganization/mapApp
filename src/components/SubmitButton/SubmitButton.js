import React from "react";
import "./submitButton.css";

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Dünya'nın yarıçapı (km)
  const dLat = deg2rad(lat2 - lat1); // lat1 ve lat2 arasındaki farkı radyan cinsinden hesapla
  const dLon = deg2rad(lon2 - lon1); // lon1 ve lon2 arasındaki farkı radyan cinsinden hesapla
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // iki nokta arasındaki mesafe (km)
  console.log(d);
  return d;
};
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const handleClick = (location) => {
  getDistance(location.lati, location.longi, 36.884, 30.704);
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
