import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import MessageInput from "./MessageInput";
import MessageComponent from "./MessageComponent";

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
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

const Content = ({ clientMessages = [], myMessages = [] }) => (
  <StyledContent>
    {[...clientMessages].reverse().map((text, index) => (
      <div key={index}>
        <MessageComponent text={text} />
      </div>
    ))}
    <MessageComponent direction="left" text={myMessages[0]} />
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
  const [clientMessages, setClientMessages] = useState([
    "this is a test",
    "again",
  ]);
  return (
    <StyledChatComponent>
      <ChatHeader />
      <Content clientMessages={clientMessages} myMessages={myMessages} />
      <MessageInput setClientMessages={setClientMessages} />
    </StyledChatComponent>
  );
};

export default ChatComponent;
