import React, { useRef } from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { Input } from "./Input";
import { useChatService } from "./lib/chat.service";

const ChatDeco = styled.div`
  border: 1px solid red;
  width: 300px;
`;
const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 20px;
`;

export const Chat = () => {
  // Use ref to messages div
  const msgRef = useRef();

  // The Chat service :)
  const { sendMessage, messages } = useChatService(() => {
    // Scroll the messages to end
    msgRef.current.scrollTop = msgRef.current.scrollHeight;
  });

  return (
    <ChatDeco>
      <MessagesWrapper ref={msgRef}>
        {messages.map((message, i) => (
          <Message key={i} type={message.type}>
            {message.text}
          </Message>
        ))}
      </MessagesWrapper>
      <Input onMessage={sendMessage} />
    </ChatDeco>
  );
};
