import React, { useState, useEffect } from "react";
import { listAllTas, deleteTa } from "../../lib/tas.api";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Example } from "../components/Example";

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

  const [filterStart, setFilterStart] = useState("");

  const filtered_tas = tas.filter(ta => {
    const re = new RegExp(filterStart);
    return re.test(ta.nombre);
  });
  console.log(filtered_tas);

  return (
    <div>
      <h1>TAs</h1>
      <Example />
      <div>
        <label>Filter TAs: </label>
        <input
          value={filterStart}
          onChange={e => setFilterStart(e.target.value)}
        />
      </div>
      <Card>
        <ul>
          {filtered_tas.map((ta, i) => (
            <li key={i}>
              <Link to={`/frase/${ta._id}`}>{ta.nombre}</Link> -
              <DeleteTa idTa={ta._id} deleteReady={fetchTAs} />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
