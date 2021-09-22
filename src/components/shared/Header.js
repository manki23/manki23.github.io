import React from 'react'
import '../../styles/shared/Header.scss'
import GreenButton from './GreenButton';
import HeaderButton from './HeaderButton';
import cv from '../../assets/CV_2021-09-22_Myriam_Anki.pdf';

const Header = () => {
    return (
      <header className="header-class">
          <GreenButton title="Resume" href={cv} />
          <HeaderButton title="Contact" goTo="#contact-page" />
          <HeaderButton title="Work" goTo="#work-page" />
          <HeaderButton title="Experience" goTo="#experience-page" />
          <HeaderButton title="About" goTo="#about-page"/>
      </header>
    );
  };
  
  export default Header;