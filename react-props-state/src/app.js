import React from "react";
import ReactDOM from "react-dom";
import { TaskList } from "./components/TaskList";

const App = () => (
  <div>
    <TaskList />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
