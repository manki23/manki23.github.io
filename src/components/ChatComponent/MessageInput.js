import React from "react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";

const StyledMessageInput = styled.div`
  height: 12%;
  background-color: ${({ theme }) => theme.colors.appLightestSlateColor};
  form > textarea {
    width: 90%;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.appLightestSlateColor};
    color: ${({ theme }) => theme.colors.appLightNavyColor};
  }
  form > button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    background-color: ${({ theme }) => theme.colors.appLightestNavyColor};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    svg {
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
        const newText = e.target.textMessage.value;
        setClientMessages((prev = []) => {
          const newArray = [...prev];
          newArray.push(newText);
          e.target.textMessage.value = "";
          return [...newArray];
        });
      }}
    >
      <textarea type="text" id="textMessage" name="textMessage" minLength="3" />
      <button type="submit">
        <MdSend />
      </button>
    </form>
  </StyledMessageInput>
);

export default MessageInput;
