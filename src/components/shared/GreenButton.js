import React from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";

const StyledGreenButton = styled.a`
  color: ${({ theme }) => theme.colors.appGreenColor} !important;
  border: 1px solid ${({ theme }) => theme.colors.appGreenColor};
  border-radius: 5px;
  font-size: 1em;
  ${({ width, theme }) =>
    width > theme.widthBreakpoints.md
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
    background-color: ${({ theme }) =>
      theme.colors.appGreenTextBackgroundColor};
  }
`;

const GreenButton = ({ title = "Green Button", href = "#" }) => {
  const [width] = useWindowWidth();

  return (
    <StyledGreenButton width={width} href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </StyledGreenButton>
  );
};

export default GreenButton;
