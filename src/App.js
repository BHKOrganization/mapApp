import { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import SubmitButton from "./components/SubmitButton/SubmitButton";

function App() {
  const [location, setLocation] = useState({ lati: 0, longi: 0 });
  return (
    <div className="App">
      <Map setLocation={setLocation} />
      <SubmitButton location={location} title="Submit" />
    </div>
  );
}

export default App;
