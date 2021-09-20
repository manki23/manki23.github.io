import React from "react";
import "../../styles/shared/HeaderButton.scss";

const HeaderButton = ({ title = "Button", goTo = "#"}) => {
  return (
    <a className="header-button" href={goTo}>
      {title}
    </a>
  );
};

export default HeaderButton;
