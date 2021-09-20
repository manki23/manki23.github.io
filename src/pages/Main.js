import React from 'react'
import '../styles/pages/Main.scss'
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import ExperiencePage from './ExperiencePage'
import WorkPage from './WorkPage';
import ContactPage from './ContactPage';

const Main = () => {
    return (
      <div className="main-content">
          <HomePage />
          <AboutPage />
          <ExperiencePage />
          <WorkPage />
          <ContactPage />
      </div>
    );
  };
  
  export default Main;