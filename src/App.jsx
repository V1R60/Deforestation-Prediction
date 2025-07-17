import { useState } from 'react';
import MapViewer from './components/MapViewer';
import AnalysisPanel from './components/AnalysisPanel';
import PredictionPanel from './components/PredictionPanel';
import './App.css';

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);

  return (
    <div className="app">
      <div className="map-viewer">
        <MapViewer />
      </div>

      {/* Floating chart icon button as background-image div */}
      {!showAnalysis && (
        <div
          className="image-button"
          title="Analysis Panel"
          onClick={() => setShowAnalysis(true)}
        />
      )}

      {/* Analysis Panel */}
      {showAnalysis && (
        <div className="panel-container">
          <AnalysisPanel
            onClose={() => setShowAnalysis(false)}
            onPredict={() => setShowPrediction(true)}
          />
        </div>
      )}

      {/* Prediction Panel */}
      {showPrediction && (
        <div className="panel-container">
          <PredictionPanel onClose={() => setShowPrediction(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
