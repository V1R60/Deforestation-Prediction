import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalysisPanel({ onClose, onPredict }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setDropdownOpen(false);
  };

  // Dummy Sierra Madre loss/recovery data from 2000–2024
  const dummyDataByYear = {};
  for (let year = 2000; year <= 2024; year++) {
    dummyDataByYear[year] = {
      loss: [
        Math.floor(Math.random() * 100 + 100), // Region 1
        Math.floor(Math.random() * 80 + 90),    // Region 2
        Math.floor(Math.random() * 60 + 70)     // Region 3
      ],
      recovery: [
        Math.floor(Math.random() * 40 + 30),    // Region 1
        Math.floor(Math.random() * 35 + 25),    // Region 2
        Math.floor(Math.random() * 30 + 20)     // Region 3
      ]
    };
  }

  const chartData = selectedYear && dummyDataByYear[selectedYear]
    ? {
        labels: ['Region 1', 'Region 2', 'Region 3'],
        datasets: [
          {
            label: 'Deforestation Loss (hectares)',
            data: dummyDataByYear[selectedYear].loss,
            backgroundColor: '#e57373',
          },
          {
            label: 'Forest Recovery (hectares)',
            data: dummyDataByYear[selectedYear].recovery,
            backgroundColor: '#81c784',
          }
        ]
      }
    : {
        labels: ['Region 1', 'Region 2', 'Region 3'],
        datasets: [
          {
            label: 'Deforestation Loss (hectares)',
            data: [0, 0, 0],
            backgroundColor: '#e57373',
          },
          {
            label: 'Forest Recovery (hectares)',
            data: [0, 0, 0],
            backgroundColor: '#81c784',
          }
        ]
      };

  return (
    <div className="analysis-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <h3>Analysis Overview</h3>

      <div className="year-selector">
        <label htmlFor="year">Year:</label>
        <div className="dropdown-wrapper">
          <button
            className="dropdown-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedYear ? selectedYear : 'Choose year'}
          </button>

          {dropdownOpen && (
            <ul className="dropdown-list">
              {Array.from({ length: 2025 - 2000 }, (_, i) => 2000 + i).map((year) => (
                <li key={year} onClick={() => handleYearSelect(year)}>
                  {year}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Bar data={chartData} />

      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <button className="predict-button" onClick={onPredict}>
          Predict
        </button>
      </div>
    </div>
  );
}

export default AnalysisPanel;
