import React from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import WorkPage from "./WorkPage";
import ContactPage from "./ContactPage";
import Footer from "../shared/Footer";

const StyledMain = styled.div`
  padding: ${({ width, theme }) =>
    width > theme.widthBreakpoints.md ? `0px 150px` : 
    width > theme.widthBreakpoints.sm ? `0px 75px` :
    `0px 25px`};
  display: flex;
  flex-direction: column;
  ${({ blurContent }) => blurContent ? `{ div { filter: blur(5px); }` : ``};
`;

const Main = ({ blurContent = false }) => {
  const [width] = useWindowWidth();

  return (
    <StyledMain width={width} blurContent={blurContent} >
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <WorkPage />
      <ContactPage />
      <Footer />
    </StyledMain>
  );
};

export default Main;
