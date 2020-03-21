import React from "react";
import styled from "styled-components";

export const Message = styled.div`
  background: ${({ type }) => (type == "server" ? "lightgreen" : "lightgray")};
  border-radius: 10px;
  padding: 3px 10px;
  margin: ${({ type }) =>
    type == "server" ? "3px 20px 3px 10px" : "3px 10px 3px 20px"};
  align-self: ${({ type }) => (type == "server" ? "flex-start" : "flex-end")};
  display: block;
  word-wrap: break-word;
  text-overflow: ellipsis;
  max-width: 85%;
`;
