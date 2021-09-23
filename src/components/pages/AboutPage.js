import React from "react";
import styled from "styled-components";
import img from "../../assets/manki-bitmoji.png";

const StyledAboutPage = styled.div`
  padding: 100px 0px;

  .content {
    display: grid;
    font-size: 0.8em;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
    .text-container {
      p {
        margin: 0px 0px 15px;
      }
    }
    .picture-container {
      position: relative;
      border: 2px solid ${(props) => props.theme.colors.appGreenColor};
      border-radius: 5px;
      margin: 20px;
      img {
        resize: none;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${(props) => props.theme.colors.appLightSlateColor};
        border-radius: 5px;
        top: -20px;
        left: -20px;
        z-index: 1;
      }
    }
  }
`;

const AboutPage = () => {
  return (
    <StyledAboutPage id="about-page">
      <h2>About me</h2>
      <div className="content">
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ol>
            <li>Laravel</li>
            <li>Angular Ionic</li>
            <li>Javascript</li>
            <li>React</li>
          </ol>
        </div>
        <div className="picture-container">
          <img src={img} />
        </div>
      </div>
    </StyledAboutPage>
  );
};

export default AboutPage;
