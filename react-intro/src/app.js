import React from "react";
import ReactDOM from "react-dom";
import { Homer } from "./Homer";

document.addEventListener("DOMContentLoaded", () => {
  // THIS IS A COMPONENT
  // This is not JS is JSX
  const App = () => {
    return (
      <div>
        <h1>Hola</h1>
        <Homer />
        <Homer />
        <Homer />
        <Homer />
        <Homer />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
