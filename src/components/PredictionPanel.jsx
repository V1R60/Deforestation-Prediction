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

function PredictionPanel({ onClose }) {
    const chartData = {
      labels: ['Sierra Madre Region'],
      datasets: [
        {
          label: 'Predicted Deforestation Loss (hectares)',
          data: [160],
          backgroundColor: '#ff9800',
        },
        {
          label: 'Predicted Recovery (hectares)',
          data: [60],
          backgroundColor: '#64b5f6',
        },
      ],
    };

  return (
    <div className="prediction-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <h3>Prediction for Next Year</h3>
      <Bar data={chartData} />
    </div>
  );
}

export default PredictionPanel;
