import React from "react";
import styled from "styled-components";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import WorkPage from "./WorkPage";
import ContactPage from "./ContactPage";

const StyledMain = styled.div`
  padding: 0px 150px;
`;

const Main = () => {
  return (
    <StyledMain>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <WorkPage />
      <ContactPage />
    </StyledMain>
  );
};

export default Main;
