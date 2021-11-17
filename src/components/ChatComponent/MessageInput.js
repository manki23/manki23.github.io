import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSend } from "react-icons/md";
import axios from 'axios';

const StyledMessageInput = styled.div`
  height: 12%;
  background-color: ${({ theme }) => theme.colors.appLightestSlateColor};
  form > textarea {
    width: 90%;
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
    padding: 5px;
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

const MessageInput = ({ setClientMessages }) => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  axios.defaults.baseURL = process.env.REACT_APP_CHAT_API_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';

  useEffect(() => {
    if (text !== '' && process.env.REACT_APP_DEV_MODE === 'false') {
      setloading(true);
      axios.post('/messages', JSON.stringify({text: text}))
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
      console.log(response, loading, error);
    }
    return () => {
      setText('');
      setloading(false);
      setResponse(null);
      setError(null);
    }
  }, [text]);

  const manageOnSubmit = (e) => {
    e.preventDefault();
    const newText = e.target.textMessage.value;

    if (newText !== '') {
      setText(newText);
      console.log(newText, text);
      setClientMessages((prev = []) => {
        const newArray = [...prev];
        newArray.push(newText);
        e.target.textMessage.value = "";
        return [...newArray];
      });
    }
  }

  return (
    <StyledMessageInput>
      <form onSubmit={manageOnSubmit} >
        <textarea type="text" id="textMessage" name="textMessage" minLength="10" />
        <button type="submit">
          <MdSend />
        </button>
      </form>
    </StyledMessageInput>
  );
}

export default MessageInput;
