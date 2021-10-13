import React from "react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";

const StyledMessageInput = styled.div`
  border: 2px solid green;
  height: 12%;
  form > textarea {
    width: 90%;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.appLightestSlateColor};
  }
  form > button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    svg {
      margin: 0px 0px 0px 10px;
      color: ${({ theme }) => theme.colors.appGreenColor};
    }
  }
  form {
    display: flex;
    height: -webkit-fill-available;
  }
`;

const MessageInput = ({ setClientMessages }) => (
  <StyledMessageInput>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.textMessage.value);
        setClientMessages((prev = []) => {
          prev.push(e.target.textMessage.value);
          console.log(prev);
          return prev;
        });
        e.target.textMessage.value = "";
      }}
    >
      <textarea type="text" id="textMessage" name="textMessage" />
      <button type="submit">
        <MdSend />
      </button>
    </form>
  </StyledMessageInput>
);

export default MessageInput;
