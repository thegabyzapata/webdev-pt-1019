import React, { useEffect, useState } from "react";
import { getFrasesFromTa } from "../../lib/tas.api";
import { Card } from "../components/Card";

export const FrasePage = props => {
  // Note: If the component is directly placed on a route, get the params
  //const { id } = props.match.params;
  // Otherwise: directly get the prop with {props.taID}

  const [frases, setFrases] = useState([]);
  useEffect(() => {
    getFrasesFromTa(props.taID).then(frases => setFrases(frases));
  }, []);

  // NOTE: You can improve this with "optional chaining"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  if (frases.length == 0) return <div>Loading...</div>;

  return (
    <Card
      cardColor="tomato"
      title={`Las fastansticas frases de "${frases[0].ta.nombre}"`}
    >
      {/* <p>Las fastansticas frases de "{frases[0]?.ta.nombre}"</p> */}
      <ul>
        {frases.map(frase => (
          <li key={frase._id}>
            {frase.frase}{" "}
            {frase.creator && <span>by {frase.creator.username}</span>}
          </li>
        ))}
      </ul>
    </Card>
  );
};
