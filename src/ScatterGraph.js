// src/ScatterGraph.js
import React from 'react';
import { Scatter} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// const ScatterGraph = ({ data }) => {
//   console.log(data)
//   const chartData = {
//     datasets: [
//       {
//         label: 'Scatter Graph',
//         // data: data.map((value, index) => ({ x: index, y: value })),
//         data:[{x:1,y:8},{x:2,y:18}],
//         backgroundColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };
const ScatterGraph = ({xData, yData }) => {
  console.log(xData)
  console.log(yData)
  
  const chartData = {
  labels: 'Scatter Dataset',
  datasets: [
    {
      label: 'My Scatter Dataset',
      data:xData.map((x, index) => ({ x, y: yData[index] })),
      backgroundColor: 'rgba(75,192,192,1)',
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};
console.log(chartData)
  const chartOptions = {
    scales: {
      x: {

        position: 'bottom',
      },
      y: {
        min: 0,
        max: 100, // Adjust the max value as needed
      },
    },
  };

  return <Scatter data={chartData}  />;
};

export default ScatterGraph;
