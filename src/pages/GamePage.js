import React from "react";
import Map from "../components/Map/Map";

const GamePage = () => {
  const [location, setLocation] = useState({ lati: 0, longi: 0 });
  return (
    <div>
      <Map location={location} setLocation={setLocation} />
    </div>
  );
};

export default GamePage;
