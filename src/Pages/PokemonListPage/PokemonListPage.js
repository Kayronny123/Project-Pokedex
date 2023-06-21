import { useContext, useEffect, useState } from "react";
import { getAllPokemons } from "../../api/request";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { PokemonListContainer, Title, SectionContainer } from "./style";
const PokemonListPage = () => {
  const [pokemon, setPokemon] = useState([]);

  const { pokedex, addPokemon } = useContext(GlobalStateContext);

  useEffect(() => {
    getAllPokemons(setPokemon);
  }, []);
  const pokemonFilter = pokemon.filter(
    (pokemon) => !pokedex.find((pokeItem) => pokeItem.name === pokemon.name)
  );

  return (
    <PokemonListContainer>
      <Title>Todos Pokemons</Title>
      <SectionContainer>
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
      </SectionContainer>
    </PokemonListContainer>
  );
};
export default PokemonListPage;
