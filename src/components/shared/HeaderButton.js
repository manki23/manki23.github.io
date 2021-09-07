import React from "react";
// import "../../styles/HeaderButton.scss";

const HeaderButton = (
  title = "Button",
  onClick = () => {},
  number = "00."
) => {
  return (
    <button className="header-button" onClick={onClick}>
      <div className="btn-number">{number}</div>
      <div>{title}</div>
    </button>
  );
};

export default HeaderButton;
