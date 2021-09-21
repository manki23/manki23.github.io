import React from 'react'
import '../../styles/shared/GreenButton.scss'

const GreenButton = ({title = "Green Button", href = "#"}) => {
    return (
      <a className="green-button" href={href} target="_blank">
          {title}
      </a>
    );
  };
  
  export default GreenButton;