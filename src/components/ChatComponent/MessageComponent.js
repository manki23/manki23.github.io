import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  & {
    position: relative;
    white-space: pre-line; // This line is to keep \n
    margin-left: ${({ direction }) =>
      direction === "right" ? `calc(100% - 220px)` : `20px`};
    margin-bottom: 10px;
    padding: 10px;
    background-color: ${({ direction, theme }) =>
      direction === "right"
        ? theme.colors.appLightNavyColor
        : theme.colors.appLightSlateColor};
    width: 200px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.sm} !important;
    font-family: ${({ theme }) => theme.fontMono};
    border: 1px solid
      ${({ direction, theme }) =>
        direction === "right"
          ? theme.colors.appNavyColor
          : theme.colors.appLightestSlateColor};
    border-radius: 10px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    ${({ direction, theme }) =>
      direction === "right"
        ? ` border-bottom: 15px solid ${theme.colors.appLightNavyColor}; `
        : ` border-top: 15px solid ${theme.colors.appLightSlateColor}; `}
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    ${({ direction }) => (direction === "right" ? `bottom: 0px;` : `top: 0px;`)}
    ${({ direction }) =>
      direction === "right" ? `right: -15px;` : `left: -15px;`}
  }
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    ${({ direction, theme }) =>
      direction === "right"
      ? ` border-bottom: 17px solid ${theme.colors.appNavyColor}; `
      : ` border-top: 17px solid ${theme.colors.appLightestSlateColor}; `}
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    ${({ direction }) =>
      direction === "right" ? `bottom: -1px;` : `top: -1px;`}
    ${({ direction }) =>
      direction === "right" ? `right: -17px;` : `left: -17px;`}
  }
`

const MessageComponent = ({ text = "", direction = "right" }) => (
  <StyledMessage direction={direction}>{text}</StyledMessage>
);

export default MessageComponent;
