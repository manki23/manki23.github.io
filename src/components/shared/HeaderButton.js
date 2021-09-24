import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeaderButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 5px;
  padding-top: 10px;
  font-size: 1em;
  margin: ${(props) => props.theme.headerMargin};
  transition: none;

  &::before {
    counter-increment: headerCounter -1;
    content: "0" counter(headerCounter) ".";
    margin-right: 5px;
    color: ${(props) => props.theme.colors.appGreenColor};
  }
  ${({ width }) =>
    width > 800
      ? ``
      : `
        display: grid;
        grid-template-rows: 3fr 2fr;
        `};

  &:hover {
    border: 2px dashed ${(props) => props.theme.colors.appGreenColor};
    margin: (${(props) => props.theme.headerMargin} - 2px);
    color: ${(props) => props.theme.colors.appGreenColor};
  }
`;

const HeaderButton = ({ title = "Button", goTo = "#" }) => {
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
    <StyledHeaderButton width={width} href={goTo}>
      {title}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
