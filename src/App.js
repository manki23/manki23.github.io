import styled, { ThemeProvider } from "styled-components";
import LeftFooter from "./components/shared/LeftFooter";
import Header from "./components/shared/Header";
import Logo from "./components/shared/Logo";
import Main from "./components/pages/Main";
import Footer from "./components/shared/Footer";

const theme = {
  colors: {
    appNavyColor: `#0a192f`,
    appLightNavyColor: `#112240`,
    appLightestNavyColor: `#233554`,
    appSlateColor: `#8892b0`,
    appLightSlateColor: `#a8b2d1`,
    appLightestSlateColor: `#ccd6f6`,
    appWhiteColor: `#e6f1ff`,
    appGreenColor: `#64ffda`,
    appGreenTextBackgroundColor: `#133141`,
  },
  fontMono: `"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace`,
  transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
  headerMargin: `10px`,
};

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }
  counter-set: headerCounter 5 h2Counter 0;
  color: ${(props) => props.theme.colors.appWhiteColor};
  background-color: ${(props) => props.theme.colors.appNavyColor};

  a {
    color: inherit;
    text-decoration: none;
    transition: ${(props) => props.theme.transition};
    cursor: pointer;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    color: ${(props) => props.theme.colors.appLightestSlateColor};
  }

  h2 {
    line-height: 1.1;
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
    color: $appSlateColor;
    font-size: 1.1em;
  }

  h2::before {
    position: relative;
    counter-increment: h2Counter 1;
    content: "0" counter(h2Counter) ".";
    margin-right: 10px;
    color: ${(props) => props.theme.colors.appGreenColor};
    font-family: ${(props) => props.theme.fontMono};
    font-size: 3vw;
    font-weight: 400;
  }

  h2 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: 3vw;
    white-space: nowrap;
  }

  .slate-color {
    color: ${(props) => props.theme.colors.appSlateColor};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Logo />
        <Header />
        <Main />
        <LeftFooter />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
