import React, { useState } from "react";
import { Pokemon } from "../components/Pokemon";

export const PokemonPage = ({ pokemonInitialStart = 1 }) => {
  const [pokemonStart, setStart] = useState(pokemonInitialStart);
  return (
    <div>
      <p>Pokemon start: {pokemonStart}</p>
      <Pokemon identifier={pokemonStart} />
      <Pokemon identifier={pokemonStart + 1} />
      <Pokemon identifier={pokemonStart + 2} />
      <div>
        <button
          onClick={() => {
            setStart(pokemonStart + 3);
            console.log("Cargando los siguientes 3");
          }}
        >
          Los siguientes tres
        </button>
      </div>
    </div>
  );
};
