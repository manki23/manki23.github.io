import React from "react";
import "../styles/pages/AboutPage.scss";
import img from "../assets/manki-bitmoji.png";

const AboutPage = () => {
  return (
    <div className="about-page" id="about-page">
      <h2 className="numbered-heading">About me</h2>
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
    </div>
  );
};

export default AboutPage;
