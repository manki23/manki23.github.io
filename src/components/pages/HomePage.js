import React from 'react';
import styled from "styled-components";

const StyledHomePage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    #pre-title {
        color: ${(props) => props.theme.colors.appGreenColor};
        font-size: 20px;
    }
    
    #title-name {
        color: ${(props) => props.theme.colors.appLightestSlateColor};
    }
    
    #title-whoami {
        color: ${(props) => props.theme.colors.appLightSlateColor};
    }
    
    #title-name, #title-whoami {
        font-size: 70px;
        font-weight: bold;
    }

    #small-intro {
        color: ${(props) => props.theme.colors.appSlateColor};
        margin-top: 20px;
        font-size: 20px;
    }
`

const HomePage = () => {
    return (
      <StyledHomePage id="home-page">
          <div id="pre-title" >
              Hi, my name is
          </div>
          <div id="title-name">Myriam Anki.</div>
          <div id="title-whoami">I am a freelance developper.</div>
          <div id="small-intro">
            I am a Laravel backend developper with some frontend skills in React.
          </div>
      </StyledHomePage>
    );
  };
  
  export default HomePage;