// src/App.js
import React, { useState } from 'react';
import SliderComponent from './SliderComponent';
import ScatterGraph from './ScatterGraph';
import RadarChart from './RadarChart';

const xAxis=[]
for (let i=0;i<360;i++)
{
  xAxis[i]=i-180;
}

function App() {
  const [numberOfSliders, setNumberOfSliders] = useState(5);
  const [antennaSeparation, setantennaSeparation] = useState(1);
  
  var [data, setData] = useState(Array(numberOfSliders).fill(1));
  var [dataP, setDataP] = useState(Array(numberOfSliders).fill(0));
  
  const [dataCalculated, setDataCalculated] = useState(Array(360).fill(0));
  const [dataCalculatedShift, setDataCalculatedShift] = useState(Array(360).fill(0));


  const handleSliderCountChange = (e) => {
    console.log("SLIDER CHANGE");
    console.log(e,e.target.value,document.getElementById('sliderCount').max);

    if (e.target.value> Number(document.getElementById('sliderCount').max)){
      e.target.value=document.getElementById('sliderCount').max;
      alert("Number of Sliders:(Between 1-10)");
    }

    setNumberOfSliders(e.target.value);
    console.log(numberOfSliders)
    handleNewArray(e.target.value);
  };
  const handleantennaSeparationChange = (e) => {
    setantennaSeparation(e.target.value);
  }; 
const handleNewArray= (c)=>{
  console.log("handlenewdata");
  console.log(c);
  console.log("learnsequence")
  console.log("trial1")
  setData(new Array(Number(c)).fill(1))
  console.log(data)
  console.log("trial1-end")
  setDataP(new Array(Number(c)).fill(0))
}

  const handleCalculate=()=>{
    console.log("pressed")
    const arrayFactor =[]
    for (let i=-180;i<180;i+=1)
    { 
      let angle=i/180*Math.PI
      let sumReal = 0; 
      let sumIm=0;
      console.log("numberOfSliders="+String(numberOfSliders))
      console.log(data)
      console.log(dataP)
      for (let k=0;k<numberOfSliders;k++){
        let elementPhase = 2*Math.PI*k * antennaSeparation * Math.sin(angle) + dataP[k]/180*Math.PI;
        sumReal+=data[k]*Math.cos(-elementPhase);
        sumIm+=data[k]*Math.sin(-elementPhase) ;
        }
        arrayFactor.push(Math.sqrt(sumReal*sumReal+sumIm*sumIm))
    }
    let radarDataRaw=[...arrayFactor]
     for (let i=0;i<180;i+=1)
    {
      radarDataRaw.unshift(radarDataRaw.pop()) 
    }
    console.log(arrayFactor)
    console.log("radarDataRaw")
    console.log(radarDataRaw)
    // console.log(arrayFactor)
    setDataCalculated(arrayFactor)
    setDataCalculatedShift(radarDataRaw)
      }

    const fromSlider= (index, value) => {
    setData(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const fromSliderP= (index, value) => {
    setDataP(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  console.log(data)
const spescificLabels=Array(360);
spescificLabels[0]=0;
spescificLabels[90]=90;
spescificLabels[180]="-180:180";
spescificLabels[270]=-90;


  const radarData = {
    
    labels: Array.from(spescificLabels),
    datasets: [
      {
        label:"Antenna Pattern",
        data: dataCalculatedShift,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>ANTENNA ARRAY CALCULATIONS</h1>
        <div>
          <label htmlFor="sliderCount">Number of Sliders:(Between 1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            id="sliderCount"
            value={numberOfSliders}
            onChange={handleSliderCountChange}
            onKeyDown={(e) => {
              e.preventDefault();
            }}

          />
        </div>
        <div>
          <label htmlFor="antennaSeperation">Antenna Separation:(Between 1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            id="antennaSeperation"
            value={antennaSeparation}
            onChange={handleantennaSeparationChange}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
         <label htmlFor="lammbda">LAMBDA</label> 
        </div>
        <div>Returned Values Amplitude= {JSON.stringify(data)}</div>
        <div>Returned Values Phase= {JSON.stringify(dataP)}</div>
        <h2> AMPLITUDE</h2>
        <SliderComponent
         numberOfSliders={numberOfSliders}
         fromSlider={fromSlider}
         min={1}
         max={10}
         step={1}
         inVal={1}
         />
          <h2> PHASE</h2>
         <SliderComponent
         numberOfSliders={numberOfSliders}
         fromSlider={fromSliderP}
         min={-180}
         max={180}
         step={45}
         inVal={0}
         />
        {/* <SliderComponent numberOfSliders={numberOfSliders} /> */}
        <div style={{ width:'1000px',height:'1000px', margin: '20px', display: 'flex', flexDirection: 'row'}}>
        <ScatterGraph xData={xAxis } yData={dataCalculated}  />
        <RadarChart data={radarData}  />
        </div>

        <div> <button onClick={()=>handleCalculate()}>Show Antenna Pattern</button></div>
      </header>
    </div>
  );
  
}

export default App;
