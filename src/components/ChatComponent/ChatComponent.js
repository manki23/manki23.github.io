import React from 'react';
import styled from "styled-components";


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
    background-color: red;
`;

const ChatComponent = () => (
    <StyledChatComponent>
        {process.env.REACT_APP_PUSHER_CLUSTER}
    </StyledChatComponent>
);

export default ChatComponent;
