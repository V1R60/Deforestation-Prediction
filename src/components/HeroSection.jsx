import { Map } from 'lucide-react';
import forestVideo from '../assets/vidBG.mp4';
import '../styles/HeroSection.css';

function HeroSection({ onMapClick, showMap }) {
  return (
    <section className="hero-section">
      {/* Background video */}
      <video
        className="hero-video-bg"
        src={forestVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Show only when map is NOT open */}
      {!showMap && (
        <>
          {/* Title */}
          <div className="hero-title-container">
            <h2 className="from-text">FROM</h2>
            <div className="middle-row">
              <span className="big-text">PIXELS</span>
              <span className="to-text">TO</span>
            </div>
            <h1 className="big-text">PROTECTION</h1>
          </div>

          {/* Map Button */}
          <button
            onClick={onMapClick}
            className="map-button"
            title="View Map"
          >
            <Map size={24} />
          </button>
        </>
      )}
    </section>
  );
}

export default HeroSection;
