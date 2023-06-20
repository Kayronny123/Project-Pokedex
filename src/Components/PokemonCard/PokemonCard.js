import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg,
  InfoPoke,
  ButtonCapture,
  ButtonDetails
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Router/cordinatos";

const PokemonCard = ({ pokeItem, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <PokeCardContainer>
      <InfoPoke>
        <p>#0{pokeItem.id}</p>
        <h1>{pokeItem.name}</h1>
        <ImgContainer>
          <PokeImg
            src={pokeItem.sprites.other["official-artwork"].front_default}
            alt={`Imagem do pokemon ${pokeItem.name}`}
          />
        </ImgContainer>
      </InfoPoke>
      <ButtonsContainer>
        <ButtonDetails
          onClick={() => goToPokemonDetailPage(navigate, pokeItem.name)}
        >
          <u>Detalhes</u>
        </ButtonDetails>
        {pathname === "/" ? (
          <ButtonCapture onClick={() => addPokemon(pokeItem)}>
            Capturar!
          </ButtonCapture>
        ) : (
          <ButtonCapture onClick={() => removePokemon(pokeItem.name)}>
            Remover
          </ButtonCapture>
        )}
      </ButtonsContainer>
    </PokeCardContainer>
  );
};
export default PokemonCard;
