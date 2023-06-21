import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../api/request";
import { returnBackgroundByType } from "../../Components/utils/returnBackgroundByType";
import { returnTypes } from "../../Components/utils/returnTypes";
import {
  ImageContainer,
  ImgWrapper,
  MovesContainer,
  PokeInfoContainer,
  StateContainer,
  TitleContainer,
  TypeAndMoveContainer,
  TypeContainer,
  TypeImg
} from "./style";

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState({});
  const { nome } = useParams();

  console.log(pokemon);
  let pokemonType;
  let pokemonId;
  let pokemonName;
  if ("types" in pokemon) {
    pokemonType = returnBackgroundByType(pokemon.types[0].type.name);
    pokemonId =
      pokemon.id.toString().length === 1 ? `0${pokemon.id}` : pokemon.id;
  }

  useEffect(() => {
    getPokemonByName(nome, setPokemon);
  }, []);
  const ChangeFirstName = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  return (
    <>
      <PokeInfoContainer colorType={pokemonType}>
        <ImageContainer>
          <ImgWrapper src={pokemon.sprites?.front_default} />
          <ImgWrapper src={pokemon.sprites?.back_default} />
        </ImageContainer>
        <StateContainer>
          <TitleContainer>
            Poderes
            {pokemon.stats?.map((pokeItem) => {
              return (
                <p>
                  <strong>{pokeItem.stat.name}</strong>:{pokeItem.base_stat}
                </p>
              );
            })}
          </TitleContainer>
        </StateContainer>
        <TypeAndMoveContainer>
          <TypeContainer>
            <p>
              #
              {pokemon && pokemon.id && pokemon.id.toString().length === 1
                ? `0${pokemon.id}`
                : pokemon.id}
            </p>
            <h1>{ChangeFirstName(pokemon.name)}</h1>
            <div>
              {pokemon.types?.map((pokeItem, index) => {
                return (
                  <TypeImg key={index} src={returnTypes(pokeItem.type.name)} />
                );
              })}
            </div>
          </TypeContainer>
        </TypeAndMoveContainer>
        <MovesContainer>
          <TitleContainer>Principais Ataques</TitleContainer>
          {pokemon.moves?.map((pokeItem, index) => {
            return (
              index < 5 && (
                <p key={index}>
                  <strong>{pokeItem.move.name}</strong>
                </p>
              )
            );
          })}
        </MovesContainer>
      </PokeInfoContainer>
    </>
  );
};
export default PokemonDetailPage;
