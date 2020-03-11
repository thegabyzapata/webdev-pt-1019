import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Pokebol = styled.div`
  background: red;
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  &::before {
    position: absolute;
    top: 0;
    margin: 0 auto;
    height: 50%;
    width: 100%;
    content: "";
    background: blue;
    z-index: 0;
    border-radius: 50% / 100% 100% 0 0;
  }
  p {
    position: absolute;
    bottom: -20px;
    width: 100%;
    color: black;
  }
  img {
    z-index: 10;
    position: relative;
  }
`;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const getPokemon = async number => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
  const response = await axios.get(url);
  const { data } = response;
  return {
    name: data.name,
    img: data.sprites.front_default
  };
};

export const Pokemon = ({ identifier }) => {
  const [pokemon, setPokemon] = useState(false);
  useEffect(() => {
    // (async () => {
    //     const pokemon = await getPokemon(identifier);
    //     console.log(pokemon);
    //     setPokemon(pokemon);
    //   })();
    setPokemon(false);
    getPokemon(identifier).then(pokemon => {
      console.log(pokemon);
      setPokemon(pokemon);
    });
  }, [identifier]);

  return (
    <Pokebol style={{ margin: 10, display: "inline-block" }}>
      {pokemon && (
        <>
          <p>
            #{identifier} -{pokemon.name}
          </p>
          <img src={pokemon.img} width="100" />
        </>
      )}
    </Pokebol>
  );
};
