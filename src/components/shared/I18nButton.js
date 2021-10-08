import React, { useState } from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import { useLanguage } from "../hooks/LanguageContext";
import { MdLanguage } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

import "../../translations/i18n";
import i18n from "i18next";
import styled from "styled-components";

import langs from "../../data/langs";

const StyledI18nSpan = styled.span`
  button {
    border: 1px solid ${({ theme }) => theme.colors.appGreenColor};
    border-radius: 40px;
    padding: 0px 7px;
    margin: 7px 7px;
    display: inline-flex;
    align-items: center;
    font-size: 1em;
    font-family: monospace;
    &:hover {
      color: ${({ theme }) => theme.colors.appGreenColor};
    }
    svg {
      font-size: 1.5em;
      color: ${({ theme }) => theme.colors.appGreenColor};
    }
    span {
      margin: 15px 0px;
    }

    ${({ width, theme }) =>
      width > theme.widthBreakpoints.md
      ? `
      & > * { background-color: ${theme.colors.appLightNavyColor}; }
      `
      : `
        background-color: ${theme.colors.appNavyColor};
      `};
      margin-left: auto !important;
      margin-right: auto !important;
  }
`;

const StyledLanguageDropDown = styled.ul`
  background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
  border-radius: 4px;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  li:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.appGreenColor};
  }
  li {
    padding: 10px 0px;
  }
`;

const LanguageDropDown = ({ setShowDropDown, setLangName }) => {
  const handleOnCLick = (key) => {
    setShowDropDown(false);
    setLangName(langs[key]);
    i18n.changeLanguage(key);
  };
  return (
    <StyledLanguageDropDown>
      {Object.keys(langs).map((key) => (
        <li key={key} onClick={() => handleOnCLick(key)}>
          {langs[key]}
        </li>
      ))}
    </StyledLanguageDropDown>
  );
};

const I18nButton = () => {
  const [width] = useWindowWidth();
  let [language] = useLanguage();
  language = language.split('-')[0];
  const [langName, setLangName] = useState(langs[language]);
  const [showDropDown, setShowDropDown] = useState(false);
  const drop = React.useRef(null);

  function handleClick(e) {
    if (!e.target.closest(`.${drop.current?.className}`) && showDropDown) {
      setShowDropDown(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <StyledI18nSpan>
      <button
        className="dropdown"
        ref={drop}
        width={width}
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        <MdLanguage />
        &nbsp;
        <span>{langName}</span>
        &nbsp;
        <RiArrowDownSLine />
      </button>
      {showDropDown && (
        <LanguageDropDown
          setShowDropDown={setShowDropDown}
          setLangName={setLangName}
        />
      )}
    </StyledI18nSpan>
  );
};

export default I18nButton;
