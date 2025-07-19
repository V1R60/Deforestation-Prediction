import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MapViewer from './components/MapViewer';
import AnalysisPanel from './components/AnalysisPanel';
import PredictionPanel from './components/PredictionPanel';
import { Home, BarChart2 } from 'lucide-react';
import './App.css';

function App() {
  const [showMap, setShowMap] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);

  return (
    <div className="app">
      <HeroSection
        onMapClick={() => setShowMap(true)}
        showMap={showMap}
      />

      {showMap && (
        <>
          <MapViewer />

          {/* Floating Buttons: Home + Analysis */}
          {!showAnalysis && !showPrediction && (
            <div className="floating-buttons">
              <button
                className="icon-button"
                onClick={() => {
                  setShowMap(false);
                  setShowAnalysis(false);
                  setShowPrediction(false);
                }}
                title="Back to Home"
              >
                <Home size={24} />
              </button>

              <button
                className="icon-button"
                onClick={() => setShowAnalysis(true)}
                title="Open Analysis Panel"
              >
                <BarChart2 size={24} />
              </button>
            </div>
          )}

          {/* Analysis and Prediction Panels */}
          {(showAnalysis || showPrediction) && (
            <div className="panel-container">
              {showAnalysis && (
                <AnalysisPanel
                  onClose={() => setShowAnalysis(false)}
                  onPredict={() => setShowPrediction(true)}
                />
              )}
              {showPrediction && (
                <PredictionPanel onClose={() => setShowPrediction(false)} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
