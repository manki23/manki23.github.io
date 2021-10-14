import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import MessageInput from "./MessageInput";
import MessageComponent from "./MessageComponent";
import ChatHeader from "./ChatHeader";

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
  bottom: 40px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
  border: 2px solid ${({ theme }) => theme.colors.appLightNavyColor};
`;

const ChatComponent = () => {
  const { t } = useTranslation();
  const myMessage = t("hiMessage");
  const [clientMessages, setClientMessages] = useState([]);
  return (
    <StyledChatComponent>
      <ChatHeader />
      <Content clientMessages={clientMessages} myMessage={myMessage} />
      <MessageInput setClientMessages={setClientMessages} />
    </StyledChatComponent>
  );
};

export default ChatComponent;
