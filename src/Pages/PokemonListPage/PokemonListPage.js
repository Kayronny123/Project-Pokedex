import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer } from "./style";
const PokemonListPage = () => {
  return (
    <PokemonListContainer>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </PokemonListContainer>
  );
};
export default PokemonListPage;
