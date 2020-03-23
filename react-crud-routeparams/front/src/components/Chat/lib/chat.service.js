import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export const ChatService = handleMessage => {
  console.log("Connecting websocket...");
  const socket = io("http://localhost:3000");

  // recive message
  socket.on("chatmessage", message => {
    console.log(message);
    handleMessage(message);
  });

  // send a message
  return msg => {
    console.log(`Sending message: "${msg}"`);
    socket.emit("chatmessage", msg);
    return true;
  };
};

export const useChatService = onMessage => {
  // The chat messagesstate holder
  const [messages, setChatMessages] = useState([]);

  // The emitter holder
  const [sendMessage, setEmitter] = useState(() => {
    console.log("Server not connected");
    return false;
  });

  // Connect on component mounted
  useEffect(() => {
    // Start the chat service with handler to receive messages from websocket
    const emitter = ChatService(msg => {
      const msgobj = { type: "server", text: msg };
      // IMPORTANT: use a function, as setChatMessages can be stale
      setChatMessages(currentState => [...currentState, msgobj]);
      //setChatMessages([...messages, msgobj]);
      onMessage(msgobj);
    });

    // NOTE: https://github.com/facebook/react/issues/14087
    setEmitter(() => msg => {
      // Emit websocket message
      emitter(msg);
      // Add to messages array
      const msgobj = { type: "me", text: msg };
      setChatMessages(currentState => [...currentState, msgobj]);
      onMessage(msgobj);
    });
  }, []);

  return {
    messages,
    sendMessage
  };
};
