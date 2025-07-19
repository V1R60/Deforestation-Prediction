import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Home } from 'lucide-react';
import '../App.css';

function MapViewer({ onHomeClick }) {
  return (
    <div className="map-viewer">
      <MapContainer center={[16.5, 122.0]} zoom={8} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      {/* HOME BUTTON */}
      <button className="home-button" onClick={onHomeClick} title="Back to Home">
        <Home size={24} />
      </button>
    </div>
  );
}

export default MapViewer;
