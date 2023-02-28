import { useState, React } from "react";
import Map from "../components/Map/Map";
import SubmitButton from "../components/SubmitButton/SubmitButton";

const GamePage = () => {
  const [location, setLocation] = useState({ lati: 0, longi: 0 });
  return (
    <div>
      <Map
        location={location}
        setLocation={setLocation}
        width="100%"
        length="calc(100vh - 77px)"
      />
      <div className="submitParent">
        <SubmitButton
          location={location}
          title="Submit"
          className="submitBtn"
        />
      </div>
    </div>
  );
};

export default GamePage;
