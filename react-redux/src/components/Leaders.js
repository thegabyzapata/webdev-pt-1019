import React from "react";
import { connect } from "react-redux";

export const Leaders = connect(state => ({ lideres: state.lideres }))(
  ({ lideres }) => (
    <div>
      <h2>Lideres de la vuelta:</h2>
      <ul>
        {lideres.map((lider, i) => (
          <li key={i}>{lider}</li>
        ))}
      </ul>
    </div>
  )
);
