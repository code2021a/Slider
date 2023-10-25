// src/ScatterGraph.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScatterController
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScatterController
);

const ScatterGraph = ({xData, yData }) => {
  const chartData = {
  labels: 'Scatter Dataset',
  datasets: [
    {
      label: 'ANTENNA PATTERN',
      data:xData.map((x, index) => ({ x, y: yData[index] })),
      backgroundColor: 'rgba(0,0,255,1)',
      pointRadius: 3,
      pointHoverRadius: 8,
      showline: true,
      fill:true,
      lineTension: 0.1,
    },
  ],
};
  const chartOptions = {
    aspectRatio: 1,
    scales: {
      x: {
        min:-180,
        max:180,
        position: 'bottom',

      },

    },
  };
  function setAspectRatio() {
    this.aspectRatio = 9;
    this.resize();
}
  return (

    <Scatter data={chartData} options={chartOptions}  />

  );
};

export default ScatterGraph;
