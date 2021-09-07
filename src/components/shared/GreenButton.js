import React from 'react'
import '../../styles/GreenButton.scss'

const GreenButton = ({title = "Button", onClick}) => {
    return (
      <a className="green-button" onClick={onClick} href="#">
          {title}
      </a>
    );
  };
  
  export default GreenButton;