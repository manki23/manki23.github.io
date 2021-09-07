import React from 'react'
import '../../styles/Header.scss'
import GreenButton from './GreenButton';
import HeaderButton from './HeaderButton';


const btnCallback = (txt) => {
    console.log(txt);
}
const Header = () => {
    return (
      <header className="header-class">
          <GreenButton title="Resume" onClick={() => btnCallback("RESUME")} />
          <HeaderButton number="04." title="Contact" onClick={() => btnCallback("CONTACT")} />
          <HeaderButton number="03." title="Work" onClick={() => btnCallback("WORK")} />
          <HeaderButton number="02." title="Experience" onClick={() => btnCallback("EXPERIENCE")} />
          <HeaderButton number="01." title="About" onClick={() => btnCallback("ABOUT")} />
      </header>
    );
  };
  
  export default Header;