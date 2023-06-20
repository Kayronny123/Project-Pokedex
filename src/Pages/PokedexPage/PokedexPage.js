import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { PokedexContainer } from "./style";

const PokedexPage = () => {
  const { pokedex, removePokemon } = useContext(GlobalStateContext);

  return (
    <PokedexContainer>
      {pokedex.map((pokeItem) => {
        return (
          <PokemonCard pokeItem={pokeItem} removePokemon={removePokemon} />
        );
      })}
    </PokedexContainer>
  );
};
export default PokedexPage;
