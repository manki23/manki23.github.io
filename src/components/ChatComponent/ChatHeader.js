import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/manki-bitmoji.png";
import { MdClose } from "react-icons/md";

const StyledChatHeader = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.appLightNavyColor};
    max-height: 10%;
    & > div {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.appLightestSlateColor};
      font-family: ${({ theme }) => theme.fontMono};
    }
    img {
      max-height: 100%;
      border-radius: 50%;
      margin: 4px 10px 4px 5px;
    }
    button > svg {
        font-size: 30px;
      position: sticky;
      color: ${({ theme }) => theme.colors.appGreenColor};
    }
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 7px;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  }
`;

const ChatHeader = ({ setShowChat}) => {
  return (
    <StyledChatHeader>
      <div>
        <img src={logo} alt="Logo" />
        Myriam
      </div>
      <button onClick={() => setShowChat(false)}>
        <MdClose />
      </button>
    </StyledChatHeader>
  );
};

export default ChatHeader;