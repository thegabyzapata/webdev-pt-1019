import styled from "styled-components";

export const SuperDiv = styled.div`
  border: 1px solid ${props => props.cardColor || "red"};
  border-radius: 10px;
  padding: 10px;
  box-shadow: ${props => props.cardColor || "red"} 5px 5px;
  margin: 15px;
  p {
    color: ${props => props.color || "black"};
    font-size: 2em;
  }
`;

export const SuperP = styled.p`
  font-size: 2em;
`;

/*
const SuperP = ({children}) => <p style={...}>{children}</p>
*/
