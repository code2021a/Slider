// src/SliderComponent.js
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const SliderComponent = ({ numberOfSliders}) => {
  const [sliderValues, setSliderValues] = useState(Array(numberOfSliders).fill(0));

  const handleSliderChange = (index, value) => {
    setSliderValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  return (
    <div style={{ width:'auto',margin: '20px', display: 'flex', flexDirection: 'column'}}>

          <div style={{ width:'auto',margin: '20px'}}>
          <h2 style={{ width:'auto'}}>ReactSlider Values: {JSON.stringify(sliderValues)}</h2>
          <div style={{ width:'fit-content',marginLeft: '1px', display: 'flex', flexDirection: 'row' ,border:'10px solid black ',borderRadius:'10px'}}>
        {Array.from({ length: numberOfSliders }).map((_, index) => (
        <div key={index} style={{ width:'auto',margin:'2px',border:'20px',borderBlockColor:"black" }}>
          <ReactSlider
            orientation="vertical"
            value={sliderValues[index]}
            onChange={(value) => handleSliderChange(index, value)}
            min={0}
            max={10}
            thumbClassName="example-thumb"
            markClassName="example-mark"
            ariaLabelledby="slider-label"
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            invert
          />
        </div>
      ))}
    </div>
          </div>

    </div>

  );
};

export default SliderComponent;
 