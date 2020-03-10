import React, { useState } from "react";
import styled from "styled-components";
import img from "../../public/homer_face.jpg";

const Caracola = styled.div`
  position: absolute;
  background: url(${img});
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 0.3s all;
  &:hover {
    background-color: blue;
    transform: scale(1.2);
  }
`;

export const BolitasLaostia = () => {
  const [bolas, setBolas] = useState([]);

  console.log(bolas);
  const addBola = e => {
    const { pageX, pageY } = e;
    const x = pageX - 10;
    const y = pageY - 151;

    setBolas([...bolas, { color: "green", x, y }]);
    //console.log(`Added bola into x:${x} y:${y}`);
  };

  return (
    <div
      style={{
        border: "1px solid red",
        height: 300,
        position: "relative",
        overflow: "hidden"
      }}
      onClick={addBola}
    >
      {bolas.map((bola, i) => (
        <Caracola {...bola} key={i} />
      ))}
    </div>
  );
};
