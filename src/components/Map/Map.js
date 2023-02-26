import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';


export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng] = useState(0);
  const [lat] = useState(0);
  const [zoom] = useState(3);
  const [API_KEY] = useState('hxQmOftRJEvzSCiQqfOZ');
  useEffect(() => {
    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom
      });
      map.current.addControl(new maplibregl.NavigationControl(),"top-left");
      map.current.on("click", (event) => {
        const { lngLat } = event;
        const longitude = lngLat.lng;
        const latitude = lngLat.lat;
        // Önceki markörü kaldır
        if (marker.current) {
          marker.current.remove();
        }
        // Markörü oluştur
        marker.current = new maplibregl.Marker({color: "#FF0000"})
          .setLngLat([longitude, latitude])
          .addTo(map.current);
      });
    }
  }, [lng, lat, zoom, API_KEY]);
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
