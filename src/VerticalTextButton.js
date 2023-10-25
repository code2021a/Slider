import React from 'react';
import './VerticalTextButton.css'; // Import your CSS file for styling

const VerticalTextButton = ({ text, onClick }) => {
  return (
    <button className="vertical-text-button" onClick={onClick}>
      {text.split('').map((char, index) => (
        <div key={index} className="char">
          {char}
        </div>
      ))}
    </button>
  );
};

export default VerticalTextButton;