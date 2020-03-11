import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/siguiente">Siguientes Pokemon</Link>
      </li>
    </ul>
  </header>
);
