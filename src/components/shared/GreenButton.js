import React from "react";
import styled from "styled-components";

const StyledGreenButton = styled.a`
  color: ${(props) => props.theme.colors.appGreenColor} !important;
  border: 1px solid ${(props) => props.theme.colors.appGreenColor};
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.appGreenTextBackgroundColor};
  }
`;

const GreenButton = ({ title = "Green Button", href = "#" }) => {
  return (
    <StyledGreenButton href={href} target="_blank">
      {title}
    </StyledGreenButton>
  );
};

export default GreenButton;
