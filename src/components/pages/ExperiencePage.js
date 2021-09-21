import React, { useState } from "react";
import "../../styles/pages/ExperiencePage.scss";

const TabButton = ({ title = "Button" }) => {
  return <button onClick={() => {}}>{title}</button>;
};

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
        <a href={companyLink} target="_blank">
          @{companyName}
        </a>
      </h3>
      <p>{timeframe}</p>
      <div>
        <ul>
          {content.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="experience-page" id="experience-page">
      <h2 className="numbered-heading">Where I've Worked</h2>
      <div className="content slate-color">
        <div className="job-tabs">
          <button className={tab == 0 ? "selected" : ""} onClick={() => setTab(0)}>
            Pongo
          </button>
          <button className={tab == 1 ? "selected" : ""} onClick={() => setTab(1)}>
            Dauphine Junior Consulting
          </button>
          <button className={tab == 2 ? "selected" : ""} onClick={() => setTab(2)}>
            Pongo Internship
          </button>
        </div>
        <div className="job-description">
        <JobContent
            content={["test", "one", "two", "three"]}
            title="Mission fullstack Laravel"
            companyName="Dauphine Junior Consulting"
            companyLink="https://dauphine-junior-consulting.com/paris/"
            timeframe="April 2021"
            hidden={tab != 1}
          />
          <JobContent
            content={["test", "one", "two", "three"]}
            title="Laravel Angular Ionic fullstack developper"
            companyName="Pongo"
            companyLink="https://www.heypongo.com/"
            timeframe="November 2020 -  August 2021"
            hidden={tab != 0}
          />
          <JobContent
            content={["test", "one", "two", "three"]}
            title="Laravel backend internship"
            companyName="Pongo"
            companyLink="https://www.heypongo.com/"
            timeframe="May - October 2020"
            hidden={tab != 2}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
