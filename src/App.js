import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import LeftFooter from "./components/shared/LeftFooter";
import Header from "./components/shared/Header";
import Logo from "./components/shared/Logo";
import Main from "./components/pages/Main";
import { WindowWidthProvider } from "./components/hooks/WindowWidthContext";
import { LanguageProvider } from "./components/hooks/LanguageContext";

const theme = {
  colors: {
    appNavyColor: `#0a192f`,
    appLightNavyColor: `#112240`,
    appLightestNavyColor: `#233554`,
    appNavyShadowColor: `rgba(2,12,27,0.7)`,
    appSlateColor: `#8892b0`,
    appLightSlateColor: `#a8b2d1`,
    appLightestSlateColor: `#ccd6f6`,
    appWhiteColor: `#e6f1ff`,
    appGreenColor: `#64ffda`,
    appGreenTextBackgroundColor: `#133141`,
  },
  fontSize: {
    xxs: `12px`,
    xs: `13px`,
    sm: `14px`,
    md: `16px`,
    lg: `18px`,
    xl: `20px`,
    xxl: `22px`,
    heading: `32px`,
  },
  widthBreakpoints: {
    sm: 640,
    md: 800,
    header: 900,
    lg: 1024,
  },
  fontMono: `"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace`,
  transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
  headerMargin: `10px`,
  borderRadius: `4px`,
};

const StyledApp = styled.div`
  & > * { background-color: ${({ theme }) => theme.colors.appNavyColor}; }
  * { box-sizing: border-box; } 
  display: flex;
  counter-reset: headerCounter 5 h2Counter 0;
  color: ${({ theme }) => theme.colors.appWhiteColor};

  a,
  button {
    color: inherit;
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
  }
  p > a,
  h3 > a {
    color: ${(props) => props.theme.colors.appGreenColor};
    outline: 0px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: ${({ theme }) => theme.transition};
  }
  p > a::after,
  h3 > a::after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.appGreenColor};
    transition: ${({ theme }) => theme.transition};
    opacity: 0.5;
    box-sizing: inherit;
  }
  p > a:focus,
  h3 > a:focus,
  p > a:hover,
  h3 > a:hover {
    outline-offset: 3px;
  }
  p > a:hover::after,
  h3 > a:hover::after {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.appLightestSlateColor};
  }

  h3 {
    font-size: 22px;
  }

  div {
    font-size: 1.1em;
  }

  p,
  ol,
  li {
    color: ${({ theme }) => theme.colors.appSlateColor};
    font-size: 1.1em;
  }

  .styled-list {
    margin: 0px;
    padding: 0px;
    li {
      list-style-type: none;
      font-size: 18px;
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
    }
    li::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: ${(props) => props.theme.colors.appGreenColor};
    }
  }

  h2::before {
    position: relative;
    counter-increment: h2Counter 1;
    content: "0" counter(h2Counter) ".";
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.appGreenColor};
    font-family: ${({ theme }) => theme.fontMono};
    font-weight: 400;
  }

  h2 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, ${({ theme }) => theme.fontSize.heading});
    white-space: nowrap;
    line-height: 1.1;
  }

  .slate-color {
    color: ${({ theme }) => theme.colors.appSlateColor};
  }
`;

function App() {
  const [blurContent, setBlurContent] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="approot">
        <LanguageProvider>
          <WindowWidthProvider>
            <Logo />
            <Header setBlurContent={setBlurContent} />
            <Main blurContent={blurContent} />
            <LeftFooter />
          </WindowWidthProvider>
        </LanguageProvider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
