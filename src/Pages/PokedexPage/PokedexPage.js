import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./style";

const PokedexPage = ({ pokedex, removePokemon }) => {
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
