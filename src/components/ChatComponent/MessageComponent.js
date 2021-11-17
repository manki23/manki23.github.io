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
        : theme.colors.appSlateColor};
    width: 200px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.sm} !important;
    font-family: ${({ theme }) => theme.fontMono};
    color: ${({ theme }) => theme.colors.appWhiteColor};
    border: 1px solid
      ${({ direction, theme }) =>
        direction === "right"
          ? theme.colors.appNavyColor
          : theme.colors.appLightestSlateColor};
    border-radius: 10px;
    transition: ${({ theme }) => theme.transition};
    ${({ animate, direction }) =>
      animate && direction === "right"
        ? ` animation-name: rightSlideIn; animation-duration: 600ms;`
        : ""};
    ${({ animate, direction }) =>
      animate && direction === "left"
        ? ` animation-name: leftSlideIn; animation-duration: 700ms; `
        : ""};
      /* ${console.log("count")} */
  }

  @keyframes rightSlideIn {
    from {
      margin-left: 100%;
    }

    75% {
      margin-left: calc(100% - 240px);
    }

    to {
      margin-left: calc(100% - 220px);
    }
  }

  @keyframes leftSlideIn {
    from {
      margin-left: -100%;
    }

    75% {
      margin-left: 30px;
    }

    to {
      margin-left: 20px;
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    ${({ direction, theme }) =>
      direction === "right"
        ? ` border-bottom: 15px solid ${theme.colors.appLightNavyColor}; `
        : ` border-top: 15px solid ${theme.colors.appSlateColor}; `}
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
`;

const MessageComponent = ({
  animate = false,
  text = "",
  direction = "right",
}) => (
  <StyledMessage animate={animate} direction={direction}>
    {text}
    {/* {console.log(animate, text)} */}
  </StyledMessage>
);

export default MessageComponent;
