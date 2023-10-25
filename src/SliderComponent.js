// src/SliderComponent.js
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import VerticalTextButton from './VerticalTextButton';

const SliderComponent = ({ numberOfSliders,fromSlider,min,max,step,inVal}) => {
  const [sliderValues, setSliderValues] = useState(Array(numberOfSliders).fill(inVal));
    console.log(numberOfSliders,sliderValues);

  const handleSliderChange = (index, value) => {
    setSliderValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const handleClick=()=>{
    setSliderValues(Array(Number(numberOfSliders)).fill(inVal))
    for (let k=0;k<numberOfSliders;k++){
      fromSlider(k,inVal);
    }
  }
  React.useEffect(() => {
    // Check if the specific prop has changed
console.log("props have changed")
      // Perform the action when the prop changes
      console.log(numberOfSliders)
      setSliderValues(Array(Number(numberOfSliders)).fill(inVal));
  }, [numberOfSliders,inVal]);
  return (
    <div style={{ width:'auto',margin: '20px', display: 'flex', flexDirection: 'column'}}>

          <div style={{ width:'auto',margin: '20px'}}>
          {/* <h2 style={{ width:'auto'}}>ReactSlider Values: {JSON.stringify(sliderValues)}</h2> */}
         <div style={{ width:'fit-content',marginLeft: '1px', display: 'flex', flexDirection: 'row' ,border:'10px solid black ',borderRadius:'10px'}}>
        {Array.from({ length: numberOfSliders }).map((_, index) => (
        <div key={index} style={{ width:'auto',margin:'2px',border:'20px',borderBlockColor:"black" }}>
          <ReactSlider
            orientation="vertical"
            value={sliderValues[index]}
            onChange={(value) => {handleSliderChange(index, value);fromSlider(index, value)}}
            min={min}
            max={max}
            step={step}
            thumbClassName="example-thumb"
            markClassName="example-mark"
            ariaLabelledby="slider-label"
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            invert
          />

        </div>
        
      ))}
      <div > 
      <VerticalTextButton text=" RESET " onClick={handleClick} />
        
      </div>
    </div>
          </div>

    </div>

  );
};

export default SliderComponent;
 