import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

const StyledLeftFooter = styled.div`
  position: fixed;
  left: 40px;
  bottom: 0;

  p:hover {
    color: ${(props) => props.theme.colors.appGreenColor};
  }

  p {
    font-size: 23px;
    margin: 20px 0px;
  }

  p:active {
    outline: 2px dashed ${(props) => props.theme.colors.appGreenColor};
    outline-offset: 6px;
  }

  span {
    display: inline-block;
    margin-left: 0.5em;
    min-height: 6em;
    border-right: 1px solid ${(props) => props.theme.colors.appSlateColor};
  }
`;

const LeftFooter = () => {
  return (
    <StyledLeftFooter>
      <p>
        <a href="https://github.com/manki23" target="_blank" title="GitHub">
          <FiGithub />
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/myriam-anki-8b9258198/"
          target="_blank"
          title="LinkedIn"
        >
          <FiLinkedin />
        </a>
      </p>
      <p>
        <a href="mailto:myriam.anki.pro@gmail.com" target="_blank" title="Mail">
          <FaRegEnvelope />
        </a>
      </p>
      <span />
    </StyledLeftFooter>
  );
};

export default LeftFooter;
