import React, { useState } from "react";

export const TaskItem = ({ itemComprado, setChecked, children }) => {
  //const [checked, setChecked] = useState(itemComprado);
  let fuego = <span>🔥</span>;
  return (
    <div
      className="taskitem"
      style={{ cursor: "pointer" }}
      onClick={() => setChecked(!itemComprado)}
    >
      <input
        type="checkbox"
        onChange={e => setChecked(!itemComprado)}
        checked={itemComprado}
      />
      <span style={{ textDecoration: itemComprado ? "line-through" : "none" }}>
        {children}
      </span>
      {itemComprado && fuego}
    </div>
  );
};
