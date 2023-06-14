import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg
} from "./style";
import ditto from "../../../public/assets/ditto.png";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Router/cordinatos";

const PokemonCard = () => {
  const navigate = useNavigate();
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg src={ditto} alt="Imagem de ditto" />
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
