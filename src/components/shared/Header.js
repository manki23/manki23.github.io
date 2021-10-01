import React, { useState } from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";
import GreenButton from "./GreenButton";
import I18nButton from "./I18nButton";
import HeaderButton from "./HeaderButton";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import cv from "../../assets/CV_2021-09-22_Myriam_Anki.pdf";

const StyledHeader = styled.header`
  div {
    display: flex;
    right: 0;
    position: fixed;
    font-family: monospace;
    font-size: 16px;
    z-index: 2;
    top: 0;
    opacity: 0.97;
    text-align: center;
    ${({ width, theme }) =>
      width > theme.widthBreakpoints.md
        ? `
    flex-direction: row-reverse;
    margin-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100vw;
    height: 80px;
    background-color: ${theme.colors.appNavyColor};
    `
        : `
    flex-direction: column-reverse;
    justify-content: center;
    width: 70vw;
    height: 100vh;
    background-color: ${theme.colors.appLightNavyColor};
    a {
      margin: 15px 0px;
    }
    button, svg, a {
      background-color: ${theme.colors.appLightNavyColor} !important;
    }
    `};
  }
  .nav-button {
    color: ${(props) => props.theme.colors.appGreenColor};
    background-color: ${(props) => props.theme.colors.appNavyColor};
    border: none;
    position: fixed;
    top: 15px;
    right: 15px;
    font-size: 40px;
    visibility: ${({ width }) => (width > 800 ? "hidden" : "visible")};
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [width] = useWindowWidth();

  return (
    <StyledHeader width={width}>
      {showMenu || width > 800 ? (
        <div>
          <GreenButton title="Resume" href={cv} />
          <HeaderButton title="Contact" goTo="#contact-page" />
          <HeaderButton title="Work" goTo="#work-page" />
          <HeaderButton title="Experience" goTo="#experience-page" />
          <HeaderButton title="About" goTo="#about-page" />
          <I18nButton />
          <button className="nav-button"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <MdClose />
          </button>
        </div>
      ) : (
        <button className="nav-button"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <FiMenu />
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;
