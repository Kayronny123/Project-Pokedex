import { useContext, useEffect, useState } from "react";
import { getAllPokemons } from "../../api/request";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { PokemonListContainer } from "./style";
const PokemonListPage = () => {
  const [pokemon, setPokemon] = useState([]);

  const { pokedex, setPokedex, addPokemon } = useContext(GlobalStateContext);

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
