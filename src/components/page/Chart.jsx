import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const generateLabels = () => {
  const labels = [];
  for (let i = 0; i < 20; i++) {
    labels.push(`${i * 2}s`);
  }
  return labels;
};

const generateData = (length, max) => Array.from({ length }, () => Math.floor(Math.random() * max));

const data = {
  labels: generateLabels(),
  datasets: [
    {
      label: 'Temperature (°C)',
      data: generateData(20, 100), 
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      yAxisID: 'y1',
    },
    {
      label: 'Humidity (%)',
      data: generateData(20, 100), 
      fill: false,
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1,
      yAxisID: 'y1', 
    },
    {
      label: 'Light (lux)',
      data: generateData(20, 1000), 
      fill: false,
      borderColor: 'rgb(255, 159, 64)',
      tension: 0.1,
      yAxisID: 'y2',
    },
  ],
};

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
      },
    },
    y1: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Temperature and Humidity',
      },
      beginAtZero: true,
      min: 0,
      max: 100,
    },
    y2: {
      type: 'linear',
      position: 'right',
      title: {
        display: true,
        text: 'Light (lux)',
      },
      beginAtZero: true,
      min: 0,
      max: 1000,
      grid: {
        drawOnChartArea: false, // Hide grid lines for the secondary axis
      },
    },
  },
};

const Chart = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Environmental Data Trend</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
