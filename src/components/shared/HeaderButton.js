import React from "react";
// import "../../styles/HeaderButton.scss";

const HeaderButton = (
  title = "Button",
  callback = () => {},
  number = "00."
) => {
  return (
    <button className="header-button" onClick={callback}>
      <div className="btn-number">{number}</div>
      <div>{title}</div>
    </button>
  );
};

export default HeaderButton;
