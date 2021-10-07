import React, { useState } from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";
import GreenButton from "./GreenButton";
import I18nButton from "./I18nButton";
import HeaderButton from "./HeaderButton";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import cv from "../../assets/CV_2021-09-22_Myriam_Anki.pdf";
import { useTranslation } from "react-i18next";

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
      width > theme.widthBreakpoints.header
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
      margin: 15px;
    }
    button, svg, a {
      background-color: ${theme.colors.appLightNavyColor};
    }
    `};
  }
  .bg-navy { background-color: ${({ theme }) => theme.colors.appNavyColor}; }
  .nav-button {
    color: ${({ theme }) => theme.colors.appGreenColor};
    border: none;
    position: fixed;
    top: 15px;
    right: 15px;
    font-size: 40px;
    visibility: ${({ width, theme }) => (width > theme.widthBreakpoints.header ? "hidden" : "visible")};
  }
`;

const Header = ({ setBlurContent }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [width] = useWindowWidth();
  const { t } = useTranslation();
  const drop = React.useRef(null);

  const handleOnCLick = () => {
    setTimeout(() => {
      setShowMenu(false);
      setBlurContent(false);
    }, 250);
  };

  function handleClick(e) {
    if (!e.target.closest(`.${drop.current?.className}`) && showMenu && !e.target.closest(`.dropdown`)) {
      handleOnCLick();
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <StyledHeader width={width}>
      {showMenu || width > 900 ? (
        <div>
          <GreenButton title={t("resume")} href={cv} />
          <HeaderButton title={t("contact")} goTo="#contact-page" />
          <HeaderButton title={t("work")} goTo="#work-page" />
          <HeaderButton title={t("experience")} goTo="#experience-page" />
          <HeaderButton title={t("about")} goTo="#about-page" />
          <I18nButton />
          <button
            className="nav-button"
            onClick={handleOnCLick}
          >
            <MdClose />
          </button>
        </div>
      ) : (
        <button
          className="nav-button bg-navy"
          onClick={() => {
            setShowMenu(true);
            setBlurContent(true);
          }}
        >
          <FiMenu />
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;
