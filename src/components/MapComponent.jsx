import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Vite does not find Leaflet's default marker images on its own,
// so we create the icon ourselves.
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapComponent({ latitude, longitude, name }) {
  const [userPosition, setUserPosition] = useState(null);
  const [locationMessage, setLocationMessage] = useState("");

  // OPTIONAL feature: only runs when the visitor clicks the button.
  function handleShowMyLocation() {
    if (!navigator.geolocation) {
      setLocationMessage("Your browser does not support location.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
        setLocationMessage("");
      },
      () => setLocationMessage("Location permission was denied or unavailable.")
    );
  }

  return (
    <div>
      {/* key makes React build a fresh map when the hotel changes */}
      <MapContainer
        key={`${latitude}-${longitude}`}
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={defaultIcon}>
          <Popup>{name}</Popup>
        </Marker>
        {userPosition && (
          <Marker position={userPosition} icon={defaultIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </MapContainer>

      <button type="button" className="btn btn-outline map-button" onClick={handleShowMyLocation}>
        Show my location (optional)
      </button>
      {locationMessage && <p className="map-message">{locationMessage}</p>}
    </div>
  );
}

export default MapComponent;
