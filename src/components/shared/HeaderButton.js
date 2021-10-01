import React from "react";
import styled from "styled-components";
import { useWindowWidth } from "../hooks/WindowWidthContext";

const StyledHeaderButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 5px;
  padding-top: 10px;
  font-size: 1em;
  margin: ${({ theme }) => theme.headerMargin};
  transition: none !important;

  &::before {
    counter-increment: headerCounter -1;
    content: "0" counter(headerCounter) ".";
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.appGreenColor};
  }
  ${({ width }) =>
    width > 800
      ? ``
      : `
        display: grid;
        grid-template-rows: 3fr 2fr;
        `};

  &:hover {
    border: 2px dashed ${({ theme }) => theme.colors.appGreenColor};
    margin: 8px;
    color: ${({ theme }) => theme.colors.appGreenColor};
  }
`;

const HeaderButton = ({ title = "Button", goTo = "#" }) => {
  const [width] = useWindowWidth();

  return (
    <StyledHeaderButton width={width} href={goTo}>
      {title}
    </StyledHeaderButton>
  );
};

export default HeaderButton;
