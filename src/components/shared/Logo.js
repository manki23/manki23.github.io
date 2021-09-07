import React from 'react'
import logo from '../../assets/manki-bitmoji.png'

const logoStyle = {
    position: "fixed",
    height: "6em"
}

const Logo = () => {
    return (
      <img className="logo-svg" src={logo} style={logoStyle} />
    );
  };
  
  export default Logo;