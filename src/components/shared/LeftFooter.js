import React from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

const StyledLeftFooter = styled.div`
  position: fixed;
  left: 40px;
  bottom: 0;

  div:hover {
    color: ${({ theme }) => theme.colors.appGreenColor};
  }

  div {
    font-size: 23px;
    margin: 20px 0px;
    color: ${({ theme }) => theme.colors.appSlateColor};
  }

  div:active {
    outline: 2px dashed ${({ theme }) => theme.colors.appGreenColor};
    outline-offset: 6px;
  }

  span {
    display: inline-block;
    margin-left: 0.5em;
    min-height: 6em;
    border-right: 1px solid ${({ theme }) => theme.colors.appSlateColor};
  }
`;

const LeftFooter = () => {
  const [width] = useWindowWidth();
  if (width > 800) {
    return (
      <StyledLeftFooter width={width}>
        <div>
          <a
            href="https://github.com/manki23"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/myriam-anki-8b9258198/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <div>
          <a
            href="mailto:myriam.anki.pro@gmail.com"
            target="_blank"
            title="Mail"
            rel="noopener noreferrer"
          >
            <FaRegEnvelope />
          </a>
        </div>
        <span />
      </StyledLeftFooter>
    );
  } else {
    return <></>;
  }
};

export default LeftFooter;
