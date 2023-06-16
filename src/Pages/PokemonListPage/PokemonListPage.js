import { useEffect, useState } from "react";
import { getAllPokemons } from "../../api/request";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "./style";
const PokemonListPage = ({ pokedex, addPokemon }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getAllPokemons(setPokemon);
  }, []);
  const pokemonFilter = pokemon.filter(
    (pokemon) => !pokedex.find((pokeItem) => pokeItem.name === pokemon.name)
  );

  return (
    <PokemonListContainer>
      {pokemonFilter.map((pokeItem) => {
        return (
          <PokemonCard
            key={pokeItem.id}
            pokeItem={pokeItem}
            pokedex={pokedex}
            addPokemon={addPokemon}
          />
        );
      })}
    </PokemonListContainer>
  );
};
export default PokemonListPage;
