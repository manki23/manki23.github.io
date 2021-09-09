import React from 'react'
import '../styles/pages/Main.scss'
import AboutPage from './AboutPage';
import HomePage from './HomePage';

const Main = () => {
    return (
      <div className="main-content">
          <HomePage />
          <AboutPage />
      </div>
    );
  };
  
  export default Main;