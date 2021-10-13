import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import MessageInput from "./MessageInput";
import { LeftMessage, RightMessage } from "./MessageComponent";

const StyledChatHeader = styled.div`
  border: 2px solid blue;
  height: 8%;
  svg {
    position: sticky;
  }
`;

const ChatHeader = () => {
  return (
    <StyledChatHeader>
      {/* <div>Myriam</div> */}
      <MdClose />
    </StyledChatHeader>
  );
};

const StyledContent = styled.div`
  border: 2px solid yellow;
  height: 80%;
  padding: 10px 0px;
`;

const Content = ({ clientMessages = [], myMessages = [] }) => (
  <StyledContent>
    <LeftMessage text={myMessages[0]} />
    {clientMessages.map((text, index) => (
      <div key={index}>
        <RightMessage text={text} />
      </div>
    ))}
  </StyledContent>
);

const StyledChatComponent = styled.div`
  max-height: 500px;
  max-width: 400px;
  height: 500px;
  width: 400px;
  border-radius: 4px;
  z-index: 1;
  overflow: auto;
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
`;

const ChatComponent = () => {
  const myMessages = ["Coucou"];
  const [clientMessages, setClientMessages] = useState(["this is a test", "again"]);
  return (
    <StyledChatComponent>
      <ChatHeader />
      {clientMessages.map((text, index) => text)}
      <Content clientMessages={clientMessages} myMessages={myMessages} />
      <MessageInput setClientMessages={setClientMessages} />
    </StyledChatComponent>
  );
};

export default ChatComponent;
