import React, { useState } from "react";
import { TaskItem } from "./TaskItem";
import "./TaskList.css";

const listaSuper = [
  { name: "Huevos🍳", super: ["Merca", "Carre4"], comprado: true },
  { name: "Leche🥛", super: ["Carre4"], comprado: false },
  { name: "Tomates🍅", super: ["Carre4"], comprado: false },
  { name: "Arroz🌾", super: ["Merca"], comprado: true }
];

export const TaskList = () => {
  const [lista, setLista] = useState(listaSuper);

  // Change item comprado value
  const handleCheck = (index, newCheck) => {
    console.log("hola", newCheck, index);

    // Change the refence to the inmutable state
    const newList = [...lista];
    newList[index].comprado = newCheck;

    setLista(newList);
  };

  return (
    <div className="tasklist" style={{ border: "1px solid red" }}>
      {lista.map((item, i) => (
        <TaskItem
          key={i}
          itemComprado={item.comprado}
          setChecked={c => handleCheck(i, c)}
        >
          <b>{item.name}</b> {/* <--- CHILDREN */}
          <span>
            {item.super.map((s, i) => (
              <em key={i}>{s}</em>
            ))}
          </span>
        </TaskItem>
      ))}
    </div>
  );
};
