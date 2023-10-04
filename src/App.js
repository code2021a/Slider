// src/App.js
import React, { useState } from 'react';
import SliderComponent from './SliderComponent';

function App() {
  const [numberOfSliders, setNumberOfSliders] = useState(5);
  

  const handleSliderCountChange = (e) => {
    setNumberOfSliders(e.target.value);
  };

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
        <SliderComponent numberOfSliders={numberOfSliders} />
        <SliderComponent numberOfSliders={numberOfSliders} />
      </header>
    </div>
  );
  
}

export default App;
