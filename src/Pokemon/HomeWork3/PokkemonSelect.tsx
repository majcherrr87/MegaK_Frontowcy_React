import { useState } from "react";
import { PokemonInfo } from "./PokemonInfo";

export const PokkemonSelect = () => {
  const [pokemon, setPokemon] = useState("pikachu");

  return (
    <>
      <button onClick={() => setPokemon("pikachu")}>Pikachu</button>
      <button onClick={() => setPokemon("charmander")}>Charmander</button>
      <button onClick={() => setPokemon("bulbasaur")}>Bulbasaur</button>
      <button onClick={() => setPokemon("charizard")}>Charizard</button>
      <PokemonInfo name={pokemon} />
    </>
  );
};
