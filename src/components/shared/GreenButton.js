import React from 'react'
// import '../../styles/GreenButton.scss'

const GreenButton = (title = "Button", onClick = () => {}) => {
    return (
      <button className="green-button" onClick={onClick}>
          {title}
      </button>
    );
  };
  
  export default GreenButton;