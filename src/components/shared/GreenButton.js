import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledGreenButton = styled.a`
  color: ${(props) => props.theme.colors.appGreenColor} !important;
  border: 1px solid ${(props) => props.theme.colors.appGreenColor};
  border-radius: 5px;
  font-size: 1em;
  ${({ width }) =>
    width > 800
    ? `
    padding: 10px;
    margin: 10px;
    `
      : `
      width: fit-content;
      padding: 15px 50px;
      margin: 15px 0px;
      margin-left: auto !important;
      margin-right: auto !important;
        `};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.appGreenTextBackgroundColor};
  }
`;

const GreenButton = ({ title = "Green Button", href = "#" }) => {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <StyledGreenButton width={width} href={href} target="_blank">
      {title}
    </StyledGreenButton>
  );
};

export default GreenButton;
