import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MapViewer from './components/MapViewer';
import AnalysisPanel from './components/AnalysisPanel';
import PredictionPanel from './components/PredictionPanel';
import './App.css';

function App() {
  const [showMap, setShowMap] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleMapClick = () => {
    setShowMap(true);
    setShowAnalysis(false); // Reset when re-entering map
    setShowPrediction(false);
  };

  const handleAnalysisClick = () => {
    setShowAnalysis(true);
    setShowPrediction(false); // Only one panel at a time
  };

  return (
    <div className="App">
      <HeroSection onMapClick={handleMapClick} showMap={showMap} />

      {showMap && (
        <>
          <MapViewer
            onHomeClick={() => {
              setShowMap(false);
              setShowAnalysis(false);
              setShowPrediction(false);
            }}
            onAnalysisClick={handleAnalysisClick}
          />

          {(showAnalysis || showPrediction) && (
            <div className="panel-container">
              {showAnalysis && (
                <AnalysisPanel
                  onClose={() => setShowAnalysis(false)}
                  onPredict={() => setShowPrediction(true)}
                  onYearChange={handleYearChange}
                  selectedYear={selectedYear}
                />
              )}

              {showPrediction && (
                <PredictionPanel
                  onClose={() => setShowPrediction(false)}
                  selectedYear={selectedYear}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
