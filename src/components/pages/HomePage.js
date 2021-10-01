import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledHomePage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  #pre-title {
    color: ${({ theme }) => theme.colors.appGreenColor};
    font-size: ${({ theme }) =>
      `clamp(${theme.fontSize.sm}, 5vw, ${theme.fontSize.md})`};
  }

  #title-name {
    color: ${({ theme }) => theme.colors.appLightestSlateColor};
  }

  #title-whoami {
    color: ${({ theme }) => theme.colors.appLightSlateColor};
  }

  #title-name,
  #title-whoami {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: bold;
  }

  #small-intro {
    color: ${({ theme }) => theme.colors.appSlateColor};
    margin-top: 20px;
    font-size: 20px;
  }
`;

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <StyledHomePage id="home-page">
      <div id="pre-title"> {t("homePagePreTitle")} </div>
      <div id="title-name">{t("homePageFullName")}.</div>
      <div id="title-whoami">{t("homePageWhoami")}.</div>
      <div id="small-intro">{t("homePageSmallIntro")} </div>
    </StyledHomePage>
  );
};

export default HomePage;
