import React from "react";
import styled from "styled-components";
import img from "../../assets/manki-bitmoji.png";
import { useWindowWidth } from "../hooks/WindowWidthContext";

const StyledAboutPage = styled.div`
  padding: 100px 0px;

  .content {
    ${({ width, theme }) =>
      width > theme.widthBreakpoints.md
        ? `
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 50px;
        `
        : `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      `};
    font-size: 0.8em;
    .text-container {
      p {
        margin: 0px 0px 15px;
      }
    }
    .picture-container {
      #wrapper {
        border-radius: ${({ theme }) => theme.borderRadius};
        /* mix-blend-mode: multiply; */
        /* filter: grayscale(100%) contrast(1); */
        transition: ${({ theme }) => theme.transition};
        /* vertical-align: middle; */
        img {
          vertical-align: middle;
          /* mix-blend-mode: multiply; */
          /* filter: grayscale(100%) contrast(1); */
          transition: ${({ theme }) => theme.transition};
          resize: none;
          width: auto;
          height: auto;
          position: absolute;
          text-align: center;
          ${({ width, theme }) => width > theme.widthBreakpoints.md ? ` `
        : `
        margin-left: auto;
        margin-right: auto;
        left: 0px;
        right: 0px;
      `};
          background-color: ${({ theme }) => theme.colors.appLightSlateColor};
          border-radius: ${({ theme }) => theme.borderRadius};
          z-index: 1;
        }
      }
      #wrapper::after {
        content: "";
        display: block;
        position: relative;
        border-radius: ${({ theme }) => theme.borderRadius};
        transition: ${({ theme }) => theme.transition};

        ${({ width, theme }) => width > theme.widthBreakpoints.md ? `
          border: 2px solid ${theme.colors.appGreenColor};
        ` : ``};
        top: 20px;
        left: ${({ width, theme }) => width > theme.widthBreakpoints.md ? `20px` : `0px`};
        z-index: 0;
        width: 200px;
        height: 250px;
        ${({ width, theme }) => width > theme.widthBreakpoints.md ? ` `
        : ` margin-left: auto; margin-right: auto; `};
      }

      #wrapper::before {
        top: 0px;
        left: 0px;
        /* background-color: {({ theme }) => theme.colors.appNavyColor}; */
        mix-blend-mode: screen;

        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: ${({ theme }) => theme.borderRadius};
        transition: ${({ theme }) => theme.transition};
      }

      #wrapper:after:hover {
        top: 10px;
        left: 10px;
        border: 20px solid red;
      }
    }
  }
`;

const AboutPage = () => {
  const [width] = useWindowWidth();

  return (
    <StyledAboutPage id="about-page" width={width}>
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
          <ul>
            <li>Laravel</li>
            <li>Angular Ionic</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="picture-container">
          <div id="wrapper">
            <img src={img} alt="manki" />
          </div>
        </div>
      </div>
    </StyledAboutPage>
  );
};

export default AboutPage;
