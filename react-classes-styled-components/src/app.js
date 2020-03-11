import React from "react";
import ReactDOM from "react-dom";
import { TaskList } from "./components/TaskList";
import { Button } from "./components/Button";
import { Bolitas } from "./components/Bolitas";
import { BolitasLaostia } from "./components/BolitasLaostia";

const App = () => (
  <div>
    <TaskList />
    <Button nombre="PEPE" />
    <Button />
    <BolitasLaostia />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
