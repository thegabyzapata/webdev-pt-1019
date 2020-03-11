import React, { useState } from "react";

const Bola = ({ x = 0, y = 0, radius = 20, color = "green" }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: color,
      top: y - radius / 2,
      left: x - radius / 2,
      width: radius,
      height: radius,
      borderRadius: "50%"
    }}
  ></div>
);

export const Bolitas = () => {
  const [bolas, setBolas] = useState([
    { color: "red", x: 0, y: 0 },
    { color: "blue", x: 20, y: 20 }
  ]);

  const addBola = e => {
    const { pageX, pageY } = e;
    const x = pageX - 10;
    const y = pageY - 151;

    setBolas([...bolas, { color: "green", x, y }]);
    console.log(`Added bola into x:${x} y:${y}`);
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
        <Bola color={bola.color} x={bola.x} y={bola.y} key={i} />
      ))}
    </div>
  );
};
