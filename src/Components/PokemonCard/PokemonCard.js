import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg
} from "./style";
import ditto from "../../../public/assets/ditto.png";

const PokemonCard = () => {
  return (
    <PokeCardContainer>
      <ImgContainer>
        <PokeImg src={ditto} alt="Imagem de ditto" />
      </ImgContainer>
      <ButtonsContainer>
        <button>Adicionar</button>
        <button>Ver Detalhes</button>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};
export default PokemonCard;
