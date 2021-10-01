import React from "react";
import styled from "styled-components";
import img from "../../assets/manki-bitmoji.png";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import { useTranslation } from "react-i18next";

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
          ${({ width, theme }) =>
            width > theme.widthBreakpoints.md
              ? ` `
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

        ${({ width, theme }) =>
          width > theme.widthBreakpoints.md
            ? `
          border: 2px solid ${theme.colors.appGreenColor};
        `
            : ``};
        top: 20px;
        left: ${({ width, theme }) =>
          width > theme.widthBreakpoints.md ? `20px` : `0px`};
        z-index: 0;
        width: 200px;
        height: 250px;
        ${({ width, theme }) =>
          width > theme.widthBreakpoints.md
            ? ` `
            : ` margin-left: auto; margin-right: auto; `};
      }
    }
  }
`;

const AboutPage = () => {
  const [width] = useWindowWidth();
  const { t } = useTranslation();

  return (
    <StyledAboutPage id="about-page" width={width}>
      <h2>{t("aboutPageTitle")}</h2>
      <div className="content">
        <div className="text-container">
          <p>{t("aboutPageParagraph1")}</p>
          <p>{t("aboutPageParagraph2")}</p>
          <p>{t("aboutPageTechnoListIntro")}</p>
          <ul className="styled-list">
            {t("aboutPageTechnoList", { returnObjects: true }) instanceof Array &&
              t("aboutPageTechnoList", { returnObjects: true }).map(
                (text, index) => <li key={index}>{text}</li>
              )}
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
