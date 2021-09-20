import React from "react";
import logo from "../../assets/manki-bitmoji.png";

const logoStyle = {
  position: "fixed",
  height: "5.9em",
  zIndex: 3,
};

const Logo = () => {
  return (
    <a href="#">
      {" "}
      <img className="logo-svg" src={logo} style={logoStyle} />{" "}
    </a>
  );
};

export default Logo;
