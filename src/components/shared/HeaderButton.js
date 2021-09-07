import React from "react";
import "../../styles/HeaderButton.scss";

const HeaderButton = ({
  title = "Button",
  onClick,
  number = "00."
}) => {
  return (
    <a className="header-button" onClick={onClick}>
      <div className="btn-number">{number}</div>
      <div className="btn-title">{title}</div>
    </a>
  );
};

export default HeaderButton;
