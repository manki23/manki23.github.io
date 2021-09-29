import styled, { ThemeProvider } from "styled-components";
import LeftFooter from "./components/shared/LeftFooter";
import Header from "./components/shared/Header";
import Logo from "./components/shared/Logo";
import Main from "./components/pages/Main";
import { WindowWidthProvider } from "./components/hooks/WindowWidthContext";

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
    lg: 1024,
  },
  fontMono: `"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace`,
  transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
  headerMargin: `10px`,
  borderRadius: `4px`,
};

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.appNavyColor};
  }
  display: flex;
  counter-set: headerCounter 5 h2Counter 0;
  color: ${({ theme }) => theme.colors.appWhiteColor};
  background-color: ${({ theme }) => theme.colors.appNavyColor};

  a {
    color: inherit;
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
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


  ul {
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
  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="approot">
        <WindowWidthProvider>
          <Header />
          <Main />
          <LeftFooter />
        </WindowWidthProvider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
