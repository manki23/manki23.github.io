import React from 'react';
import styled from 'styled-components';
import GreenButton from './GreenButton';
import HeaderButton from './HeaderButton';
import cv from '../../assets/CV_2021-09-22_Myriam_Anki.pdf';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row-reverse;
    position: fixed;
    right: 0;
    margin-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: monospace;
    font-size: 16px;
    z-index: 2;
    top: 0;
    width: 100vw;
    height: 80px;
    background-color: ${(props) => props.theme.colors.appNavyColor};
    opacity: 0.97;
`;

const Header = () => {
    return (
      <StyledHeader>
          <GreenButton title="Resume" href={cv} />
          <HeaderButton title="Contact" goTo="#contact-page" />
          <HeaderButton title="Work" goTo="#work-page" />
          <HeaderButton title="Experience" goTo="#experience-page" />
          <HeaderButton title="About" goTo="#about-page"/>
      </StyledHeader>
    );
  };
  
  export default Header;