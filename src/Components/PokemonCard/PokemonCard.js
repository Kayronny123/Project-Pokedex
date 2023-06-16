import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Router/cordinatos";

const PokemonCard = ({ pokeItem, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={pokeItem.sprites.front_default}
          alt={`Imagem do pokemon ${pokeItem.name}`}
        />
      </ImgContainer>
      <ButtonsContainer>
        {pathname === "/" ? (
          <button onClick={() => addPokemon(pokeItem)}>Adicionar</button>
        ) : (
          <button onClick={() => removePokemon(pokeItem.name)}>Remover</button>
        )}
        <button onClick={() => goToPokemonDetailPage(navigate, pokeItem.name)}>
          Ver Detalhes
        </button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};
export default PokemonCard;
