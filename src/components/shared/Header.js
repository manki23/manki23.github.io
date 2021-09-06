import React from 'react'
import '../../styles/Header.scss'
import GreenButton from './GreenButton';
import HeaderButton from './HeaderButton';

const btnCallback = (txt) => {
    console.log(txt);
}

const Header = () => {
    return (
      <Header className="header-class">
          {/* <HeaderButton number="01." title="About" callback={btnCallback("ABOUT")} /> */}
          {/* <HeaderButton number="02." title="Experience" callback={btnCallback("EXPERIENCE")} /> */}
          {/* <HeaderButton number="03." title="Work" callback={btnCallback("WORK")} /> */}
          {/* <HeaderButton number="04." title="Contact" callback={btnCallback("CONTACT")} /> */}
          {/* <GreenButton title="Resume" callback={btnCallback} /> */}
      </Header>
    );
  };
  
  export default Header;