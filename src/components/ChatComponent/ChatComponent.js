import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import MessageInput from "./MessageInput";
import MessageComponent from "./MessageComponent";
import ChatHeader from "./ChatHeader";
import logo from "../../assets/manki-bitmoji.png";

const StyledContent = styled.div`
  height: 78%;
  padding: 10px 0px;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow-x: hidden;
`;

const Content = ({ clientMessages = "", myMessage = [] }) => (
  <StyledContent>
    {[...clientMessages].reverse().map((text, index) => (
      <div key={index}>
        <MessageComponent animate={index === 0} text={text} />
      </div>
    ))}
    <MessageComponent animate={true} direction="left" text={myMessage} />
  </StyledContent>
);

const StyledChatComponent = styled.div`
  max-height: 500px;
  max-width: 400px;
  height: 500px;
  width: 400px;
  border-radius: 6px;
  z-index: 1;
  overflow: auto;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
  border: 2px solid ${({ theme }) => theme.colors.appLightNavyColor};
`;

const StyledChatButton = styled.div`
  & {
    z-index: 1;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
  }
  & > button {
    border-radius: 50%;
    padding: 0px 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.appLightSlateColor};
    background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
    img {
      height: 80px;
    }
  }
  & > span {
    background-color: red;
    color: white;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
  }
`;

const ChatComponent = () => {
  const { t } = useTranslation();
  const myMessage = t("hiMessage");
  const [clientMessages, setClientMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  return showChat ? (
    <StyledChatComponent>
      <ChatHeader setShowChat={setShowChat} />
      <Content clientMessages={clientMessages} myMessage={myMessage} />
      <MessageInput setClientMessages={setClientMessages} />
    </StyledChatComponent>
  ) : (
    <StyledChatButton>
      <button onClick={() => setShowChat(true)}>
        <img src={logo} alt="Logo" />
      </button>
      <span>1</span>
    </StyledChatButton>
  );
};

export default ChatComponent;
