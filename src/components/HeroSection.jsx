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

            {/* Description */}
            <p className="hero-description">
              This tool uses satellite imagery to track deforestation, and recovery trends across time. It also has predictive features 
              that assist illustrate potential future patterns based on past data and analysis.
              <br /><br />
              <strong>Disclaimer:</strong> Predictions are data-driven estimates and should not be considered as definitive outcomes.
              Environmental changes are influenced by numerous unpredictable factors.
            </p>
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
