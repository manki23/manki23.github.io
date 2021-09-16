import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import "../../styles/shared/LeftFooter.scss";

const LeftFooter = () => {
  return (
    <div className="left-footer">
      <p className="left-footer-icon">
        <a
          href="https://github.com/manki23"
          target="_blank"
          title="GitHub"
        >
          <FiGithub />
        </a>
      </p>
      <p className="left-footer-icon">
        <a
          href="https://www.linkedin.com/in/myriam-anki-8b9258198/"
          target="_blank"
          title="LinkedIn"
        >
          <FiLinkedin />
        </a>
      </p>
      <p className="left-footer-icon">
        <a
          href="mailto:myriam.anki.pro@gmail.com"
          target="_blank"
          title="Mail"
        >
          <FaRegEnvelope />
        </a>
      </p>
      <span className="left-line"></span>
    </div>
  );
};

export default LeftFooter;
