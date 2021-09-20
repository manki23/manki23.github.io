import React from 'react'
import '../../styles/shared/Header.scss'
import GreenButton from './GreenButton';
import HeaderButton from './HeaderButton';

const btnCallback = (txt) => {
    console.log(txt);
}

const Header = () => {
    return (
      <header className="header-class">
          <GreenButton title="Resume" onClick={() => btnCallback("RESUME")} />
          <HeaderButton title="Contact" goTo="#contact-page" />
          <HeaderButton title="Work" goTo="#work-page" />
          <HeaderButton title="Experience" goTo="#experience-page" />
          <HeaderButton title="About" goTo="#about-page"/>
      </header>
    );
  };
  
  export default Header;