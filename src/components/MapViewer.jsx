import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapViewer() {
  return (
    <MapContainer
      center={[12.8797, 121.774]}
      zoom={6}
      className="map-viewer"
      style={{ height: '100vh', width: '100vw', zIndex: 0 }} // Ensure it fills the screen
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapViewer;
