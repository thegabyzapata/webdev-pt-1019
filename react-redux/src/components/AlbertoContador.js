import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { operation, addLeaderAction } from "../redux/actions";

const Marc = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 5px;
`;

const Component = ({ vueltas, dispatch, equipo }) => {
  const [liderName, setLiderName] = useState("");
  return (
    <Marc>
      <p>
        [{equipo}] - Alberto has dado <b>{vueltas}</b> vueltas
      </p>
      <button onClick={() => dispatch(operation(1))}>Otra más</button>
      <button onClick={() => dispatch(operation(-1))}>Vete para atrás</button>
      <div>
        <input value={liderName} onChange={e => setLiderName(e.target.value)} />
        <button
          onClick={() => {
            dispatch(addLeaderAction(`[${equipo}] - ${liderName}`));
            setLiderName("");
          }}
        >
          Add lider
        </button>
      </div>
    </Marc>
  );
};

export const AlbertoContador = connect(state => ({
  vueltas: state.vueltas,
  lideres: state.lideres
}))(Component);
