import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// import "leaflet/dist/images/marker-shadow.png";
// import "leaflet/dist/images/marker-icon-2x.png";

export default function Map({ destination }) {
const customMarkerIcon = L.icon({
  iconUrl: '/images/location_icon.png', // Path to your custom marker icon
  iconSize: [60, 60], // Size of the icon
  iconAnchor: [30, 60], // Anchor point of the icon (centered bottom)
});
  return (
    <MapContainer
      center={destination || [40.7128, -74.006]} // Replace latitude and longitude with the appropriate values
      zoom={13}
      style={{ height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {destination && (
        <Marker position={destination} icon={customMarkerIcon }>
        </Marker>
      )}
    </MapContainer>
  );
}
