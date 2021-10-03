import React, { useState } from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import { useLanguage } from "../hooks/LanguageContext";
import { MdLanguage } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

import '../../translations/i18n';
import i18n from "i18next";
import styled from "styled-components";

import langs from "../../data/langs";

const StyledI18nButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.appGreenColor};
  background-color: ${({ theme }) => theme.colors.appNavyColor};
  border-radius: 40px;
  padding: 0px 5px;
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
      ? ` `
      : `
      margin-left: auto !important;
      margin-right: auto !important;
    `};
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
    setLangName(langs[key])
    i18n.changeLanguage(key);
  };
  return (
    <StyledLanguageDropDown>
      { Object.keys(langs).map((key) => <li key={key} onClick={() => handleOnCLick(key) }>{langs[key]}</li>) }
    </StyledLanguageDropDown>
  );
};

const I18nButton = () => {
  const [width] = useWindowWidth();
  const [language] = useLanguage();
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
    <span>
      <StyledI18nButton className="dropdown" ref={drop} width={width} onClick={() => {setShowDropDown(!showDropDown)}}>
        <MdLanguage />
        &nbsp;
        <span>{langName}</span>
        &nbsp;
        <RiArrowDownSLine />
      </StyledI18nButton>
      {showDropDown && <LanguageDropDown setShowDropDown={setShowDropDown} setLangName={setLangName} />}
    </span>
  );
};

export default I18nButton;
