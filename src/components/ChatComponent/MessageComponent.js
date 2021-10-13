import React from "react";
import styled from "styled-components";

const StyledRightMessage = styled.div`
  & {
    position: relative;
    margin-bottom: 10px;
    margin-left: calc(100% - 220px);
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.appLightNavyColor};
    width: 200px;
    height: 50px;
    text-align: left;
    font: 400 0.9em "Open Sans", sans-serif;
    border: 1px solid ${({ theme }) => theme.colors.appNavyColor};
    border-radius: 10px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 15px solid ${({ theme }) => theme.colors.appLightNavyColor};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    bottom: 0;
    right: -15px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 17px solid ${({ theme }) => theme.colors.appNavyColor};
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    bottom: -1px;
    right: -17px;
  }
`;

export const RightMessage = ({ text = "" }) => (
  <StyledRightMessage>{text}</StyledRightMessage>
);

const StyledLeftMessage = styled.div`
  & {
    position: relative;
    margin-left: 20px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.appLightSlateColor};
    width: 200px;
    height: 50px;
    text-align: left;
    font: 400 0.9em "Open Sans", sans-serif;
    border: 1px solid ${({ theme }) => theme.colors.appLightestSlateColor};
    border-radius: 10px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid ${({ theme }) => theme.colors.appLightSlateColor};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    left: -15px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid ${({ theme }) => theme.colors.appLightestSlateColor};
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    left: -17px;
  }
`;

export const LeftMessage = ({ text }) => <StyledLeftMessage>{text}</StyledLeftMessage>;

