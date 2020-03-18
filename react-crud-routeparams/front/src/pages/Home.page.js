import React, { useState, useEffect } from "react";
import { listAllTas, deleteTa } from "../../lib/tas.api";
import { Link } from "react-router-dom";

const DeleteTa = ({ idTa, deleteReady }) => (
  <a
    href="#"
    onClick={async () => {
      await deleteTa(idTa);
      deleteReady();
    }}
  >
    Delete
  </a>
);

export const HomePage = () => {
  const [tas, setTas] = useState([]);

  const fetchTAs = () => listAllTas().then(tas => setTas(tas));

  // IMPORTANT: Execute this effect only when component is first mounted/rendered
  useEffect(() => {
    fetchTAs();
    // IMPORTANT: This is executed on component unmount (when the component disappears)
    return () => console.log("bye bye");
  }, []);

  return (
    <div>
      <h1>TAs</h1>
      <ul>
        {tas.map((ta, i) => (
          <li key={i}>
            <Link to={`/frase/${ta._id}`}>{ta.nombre}</Link> -
            <DeleteTa idTa={ta._id} deleteReady={fetchTAs} />
          </li>
        ))}
      </ul>
    </div>
  );
};
