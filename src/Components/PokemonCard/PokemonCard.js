import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg
} from "./style";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Router/cordinatos";

const PokemonCard = ({ pokeItem }) => {
  const navigate = useNavigate();
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg
          src={pokeItem.sprites.front_default}
          alt={`Imagem do pokemon ${pokeItem.name}`}
        />
      </ImgContainer>
      <ButtonsContainer>
        <button>Adicionar</button>
        <button onClick={() => goToPokemonDetailPage(navigate)}>
          Ver Detalhes
        </button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};
export default PokemonCard;
