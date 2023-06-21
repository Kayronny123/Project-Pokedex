import {
  ButtonsContainer,
  ImgContainer,
  PokeCardContainer,
  PokeImg,
  InfoPoke,
  ButtonCapture,
  ButtonDetails,
  TypeImg,
  PokeBall
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailPage } from "../../Router/cordinatos";
import { returnTypes } from "../utils/returnTypes";
import { returnBackgroundByType } from "../utils/returnBackgroundByType";
import pokebola from "../../../public/assets/pokebola.png";

const PokemonCard = ({ pokeItem, addPokemon, removePokemon }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <PokeCardContainer
      returnBackgroundByType={returnBackgroundByType(
        pokeItem.types[0].type.name
      )}
    >
      <InfoPoke>
        <p>#0{pokeItem.id}</p>
        <h1>{pokeItem.name}</h1>
        <div>
          {pokeItem.types.map((typeItem, index) => {
            return (
              <TypeImg key={index} src={returnTypes(typeItem.type.name)} />
            );
          })}
        </div>
        <ImgContainer>
          <PokeBall src={pokebola} />
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
