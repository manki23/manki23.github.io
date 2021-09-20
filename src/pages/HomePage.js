import React from 'react'
import '../styles/pages/HomePage.scss'

const HomePage = () => {
    return (
      <div className="home-page" id="home-page">
          <div className="pre-title" >
              Hi, my name is
          </div>
          <div className="title-name">Myriam Anki.</div>
          <div className="title-whoami">I am a freelance developper.</div>
          <div className="small-intro">
            I am a Laravel backend developper with some frontend skills in React.
          </div>
      </div>
    );
  };
  
  export default HomePage;