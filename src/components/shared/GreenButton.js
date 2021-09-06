import React from 'react'
// import '../../styles/GreenButton.scss'

const GreenButton = (title = "Button", callback = () => {}) => {
    return (
      <button className="green-button" onClick={callback}>
          {title}
      </button>
    );
  };
  
  export default GreenButton;