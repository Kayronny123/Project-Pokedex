import { useEffect, useState } from "react";
import { getAllPokemons } from "../../api/request";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "./style";
const PokemonListPage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getAllPokemons(setPokemon);
  }, []);
  return (
    <PokemonListContainer>
      {pokemon.map((pokeItem) => {
        return <PokemonCard key={pokeItem.id} pokeItem={pokeItem} />;
      })}
    </PokemonListContainer>
  );
};
export default PokemonListPage;
