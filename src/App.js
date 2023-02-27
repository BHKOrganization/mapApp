import { useState } from "react";
import "./App.css";
import Map from "./components/Map/Map";


function App() {
  const [location, setLocation] = useState({ lati: 0, longi: 0 });
  return (
    <div className="App">
      <div>
        <Map location={location} setLocation={setLocation} />
      </div>
      
    </div>
  );
}

export default App;
