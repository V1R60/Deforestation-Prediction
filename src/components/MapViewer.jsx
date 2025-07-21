import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Home, BarChart } from 'lucide-react';
import '../App.css';

function MapViewer({ onHomeClick, onAnalysisClick }) {
  return (
    <div className="map-viewer">
      <MapContainer center={[16.5, 122.0]} zoom={8} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="icon-button" onClick={onHomeClick} title="Home">
          <Home size={24} />
        </button>
        <button className="icon-button" onClick={onAnalysisClick} title="Analysis Chart">
          <BarChart size={24} />
        </button>
      </div>
    </div>
  );
}

export default MapViewer;
