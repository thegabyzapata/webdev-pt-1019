import React, { useState } from "react";
import styled from "styled-components";

const Wr = styled.div`
  display: flex;
  input {
    width: 80%;
    padding-left: 10px;
  }
  button {
    width: 20%;
  }
`;

export const Input = ({ onMessage }) => {
  const [msg, setMsg] = useState("");
  const handleSend = () => {
    if (msg != "") {
      onMessage(msg);
      setMsg("");
    } else {
      console.error("blank message");
    }
  };
  return (
    <Wr onKeyPress={e => e.which == 13 && handleSend()}>
      <input
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Your message"
      />
      <button onClick={handleSend}>Send</button>
    </Wr>
  );
};
