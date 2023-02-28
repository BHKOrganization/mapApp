import { useState, React } from 'react'; 
import Map from '../components/Map/Map'
import SubmitButton from '../components/SubmitButton/SubmitButton';

export const GamePage = () => {
    const [location, setLocation] = useState({ lati: 0, longi: 0 });
  return (
    <div>
        <Map location={location} setLocation={setLocation} />
        <div className="submitParent">
            <SubmitButton
            location={location}
            title="Submit"
            className="submitBtn"
        />
        </div>
    </div>
  )
}
