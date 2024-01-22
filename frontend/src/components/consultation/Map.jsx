import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet/dist/images/marker-shadow.png";
// import "leaflet/dist/images/marker-icon-2x.png";

export default function Map({ destination, onMapClick }) {

const [clickLocation, setClickLocation] = useState(null)

const handleMapClick = (event) => {
  const { lat, lng } = event.latlng;
  setClickLocation({ lat, lng });

  // Pass the selected location back to the parent component
  onMapClick({ latitude: lat, longitude: lng });
};



  return (
    <MapContainer
      center={destination || [40.7128, -74.006]} 
      zoom={13}
      style={{ height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {destination && <Marker position={destination} />}
      {clickLocation && <Marker position={clickLocation} />}
    </MapContainer>
  );
}
