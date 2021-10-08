import React, { useState } from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledExperiencePage = styled.div`
  padding: 100px 0px;
  .content {
    ${({ width, theme }) =>
      width > theme.widthBreakpoints.md
        ? `
      display: grid;
      grid-template-columns: 1fr 3fr;
    `
        : ``}
    .job-tabs {
      ${({ width, theme }) =>
        width > theme.widthBreakpoints.md
          ? `
          `
          : `
        display: flex;
        overflow-x: auto;
        margin-bottom: 25px;
      `}
      button {
        max-width: 90px;
        min-height: 42px;
        min-width: ${({ width, theme }) =>
          width > theme.widthBreakpoints.md ? `100%` : `fit-content`};
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.appSlateColor};
        font-family: monospace;
        font-size: 15px;
        text-align: left;
        padding: ${({ width, theme }) =>
          width > theme.widthBreakpoints.md ? `20px 10px` : `10px 20px`};

        cursor: pointer;
        border: 0px;
        border-radius: 0px;
        ${({ width, theme }) =>
          width > theme.widthBreakpoints.md
            ? `border-left: 2px solid`
            : `border-bottom: 2px solid`}
        ${({ theme }) => theme.colors.appLightestNavyColor};
      }

      button:hover,
      .selected {
        color: ${(props) => props.theme.colors.appGreenColor};
        ${({ width, theme }) =>
          width > theme.widthBreakpoints.md
            ? `border-left: 2px solid`
            : `border-bottom: 2px solid`}
        ${({ theme }) => theme.colors.appGreenColor};
      }

      button:hover {
        background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
      }
    }

    .job-description {
      padding: 10px 5px;
      h3 {
        margin: 0px;
        margin-bottom: 2px;
      }
      p {
        font-family: monospace;
        font-size: 0.7em;
        margin-top: 0px;
        margin-bottom: 25px;
      }
      a {
        color: ${({ theme }) => theme.colors.appGreenColor};
      }
    }
  }
`;

const JobContent = ({
  content = [],
  title = "",
  companyName = "",
  companyLink = "",
  timeframe = "",
  hidden = true,
}) => {
  return (
    <div hidden={hidden}>
      <h3>
        {title}{" "}
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          @ {companyName}
        </a>
      </h3>
      <p>{timeframe}</p>
      <div>
        <ul className="styled-list">
          {content.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const [tab, setTab] = useState(0);
  const [width] = useWindowWidth();
  const { t } = useTranslation();

  return (
    <StyledExperiencePage id="experience-page" width={width}>
      <h2>{t("experiencePageTitle")}</h2>
      <div className="content">
        <div className="job-tabs">
          {t("experiencePageJobs", { returnObjects: true }) instanceof Array &&
            t("experiencePageJobs", { returnObjects: true }).map(({ tabName }, index) => (
              <button
                key={index}
                className={tab === index ? "selected" : ""}
                onClick={() => setTab(index)}
              >
                {tabName}
              </button>
            ))}
        </div>
        <div className="job-description">
          {t("experiencePageJobs", { returnObjects: true }) instanceof Array &&
            t("experiencePageJobs", { returnObjects: true }).map(
              (
                { jobTitle, companyName, companyLink, timeframe, content },
                index
              ) => (
                <JobContent
                  key={index}
                  title={jobTitle}
                  companyName={companyName}
                  companyLink={companyLink}
                  timeframe={timeframe}
                  content={content}
                  hidden={tab !== index}
                />
              )
            )}
        </div>
      </div>
    </StyledExperiencePage>
  );
};

export default ExperiencePage;
