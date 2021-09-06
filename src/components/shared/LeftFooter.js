import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "../../styles/LeftFooter.scss";

const LeftFooter = () => {
  return (
    <div className="left-footer">
      <p>
        <a
          href="https://github.com/manki23"
          target="_blank"
          className="left-footer-icon"
        >
          <FiGithub />
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/myriam-anki-8b9258198/"
          target="_blank"
          className="left-footer-icon"
        >
          <FiLinkedin />
        </a>
      </p>
      <span className="left-line"></span>
    </div>
  );
};

export default LeftFooter;
