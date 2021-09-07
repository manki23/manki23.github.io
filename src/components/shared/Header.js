import React from 'react'
import '../../styles/Header.scss'
import GreenButton from './GreenButton';
import HeaderButton from './HeaderButton';

// const btnCallback = (txt) => {
    // console.log(txt);
// }

const Header = () => {
    return (
      <Header className="header-class">
          {/* <HeaderButton number="01." title="About" onClick={btnCallback("ABOUT")} /> */}
          {/* <HeaderButton number="02." title="Experience" onClick={btnCallback("EXPERIENCE")} /> */}
          {/* <HeaderButton number="03." title="Work" onClick={btnCallback("WORK")} /> */}
          {/* <HeaderButton number="04." title="Contact" onClick={btnCallback("CONTACT")} /> */}
          {/* <GreenButton title="Resume" onClick={btnCallback} /> */}
      </Header>
    );
  };
  
  export default Header;