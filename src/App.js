// src/App.js
import React, { useState } from 'react';
import SliderComponent from './SliderComponent';
import ScatterGraph from './ScatterGraph';
const xval=[1,2,3,4,5];
const xAxis=[]
console.log(xval)
for (let i=0;i<360;i++)
{
  xAxis[i]=i;
}

function App() {
  const [numberOfSliders, setNumberOfSliders] = useState(5);
  const [data, setData] = useState(Array(numberOfSliders).fill(5));
  const [dataCalculated, setDataCalculated] = useState(Array(360).fill(0));

  const handleSliderCountChange = (e) => {
    setNumberOfSliders(e.target.value);
  };
  const handleCalculate=()=>{
    console.log("pressed")
    const na=[]
    for (let i=0;i<360;i+=1)
    { 
      na[i]=i*data[0];
    }
    setDataCalculated(na)
      }
  const fromSlider= (index, value) => {
    setData(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Slider App</h1>
        <div>
          <label htmlFor="sliderCount">Number of Sliders:</label>
          <input
            type="number"
            id="sliderCount"
            value={numberOfSliders}
            onChange={handleSliderCountChange}
          />
        </div>
        <div>Returned Values= {JSON.stringify(data)}</div>
        <div>Setdara= {JSON.stringify(setDataCalculated)}</div>
        <SliderComponent
         numberOfSliders={numberOfSliders}
         fromSlider={fromSlider}
         />
        {/* <SliderComponent numberOfSliders={numberOfSliders} /> */}
        <div style={{ width:'1000px',margin: '20px', display: 'flex', flexDirection: 'column'}}>
        <ScatterGraph xData={xAxis } yData={dataCalculated}  />
        </div>
        <div> <button onClick={()=>handleCalculate()}>Show Antenna Pattern</button></div>
      </header>
    </div>
  );
  
}

export default App;
