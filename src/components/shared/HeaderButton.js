import React from "react";
import "../../styles/shared/HeaderButton.scss";

const HeaderButton = ({
  title = "Button",
  onClick,
  number = "00."
}) => {
  return (
    <a className="header-button" onClick={onClick} href="#">
      <div className="btn-number">{number}</div>
      <div className="btn-title">{title}</div>
    </a>
  );
};

export default HeaderButton;
