// RadarChart.js

import React from 'react';
import { Radar } from 'react-chartjs-2';
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
    ScatterController,
    RadialLinearScale
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
    ScatterController,
    RadialLinearScale
  );

  const RadarChart = ({ data }) => {
    const options = {
      legends:{
        display:false,
      },
      scales: {
        r: {
          label:false,
          angleLines: {
            display: true,
        },
          stepSize: 1, // Set the step size to control the number of ticks
          labels:false
        },
      },
    };
  
    return (

        <Radar data={data} options={options} />
   
    );
  };
  
  export default RadarChart;