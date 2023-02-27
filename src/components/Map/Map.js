import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";
import SubmitButton from "../SubmitButton/SubmitButton";
export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng] = useState(0);
  const [lat] = useState(0);
  const [zoom] = useState(3);
  const [API_KEY] = useState("hxQmOftRJEvzSCiQqfOZ");
  const [location2, setLocation2] = useState({ lati: 0, longi: 0 });

  const handleLocation = () => {
    props.setLocation({ lati: location2.lati, longi: location2.longi });
  };

  useEffect(() => {
    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom,
      });
      map.current.addControl(new maplibregl.NavigationControl(), "top-left");
      map.current.on("click", (event) => {
        const { lngLat } = event;
        const longitude = lngLat.lng;
        const latitude = lngLat.lat;

        // Önceki markörü kaldır
        if (marker.current) {
          marker.current.remove();
        }
        setLocation2({ lati: latitude, longi: longitude });
        // Markörü oluştur
        marker.current = new maplibregl.Marker({ color: "#FF0000" })
          .setLngLat([longitude, latitude])
          .addTo(map.current);
      });
    }
  }, [lng, lat, zoom, API_KEY]);

  return (
    <div>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" onClick={handleLocation} />
      </div>
      <div className="submitParent">
        <SubmitButton
          location={props.location}
          title="Submit"
          className="submitBtn"
        />
      </div>
    </div>
  );
}
