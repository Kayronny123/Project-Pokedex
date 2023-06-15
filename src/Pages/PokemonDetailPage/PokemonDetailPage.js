import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../api/request";
import {
  ImageContainer,
  ImgWrapper,
  MovesContainer,
  PokeInfoContainer,
  StateContainer,
  TitleContainer,
  TypeAndMoveContainer,
  TypeContainer
} from "./style";

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const { nome } = useParams();

  console.log(pokemon);
  useEffect(() => {
    getPokemonByName(nome, setPokemon);
  }, []);
  return (
    <>
      <PokeInfoContainer>
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
            {pokemon.types?.map((pokeItem) => {
              return (
                <p>
                  <strong>{pokeItem.type.name}</strong>
                </p>
              );
            })}
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
