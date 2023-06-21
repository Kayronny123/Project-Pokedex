import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../api/request";
import { returnBackgroundByType } from "../../Components/utils/returnBackgroundByType";
import { returnTypes } from "../../Components/utils/returnTypes";
import {
  ImageContainer,
  ImgWrapper,
  MovesContainer,
  PokeballImg,
  PokeInfoContainer,
  StateContainer,
  TitleContainer,
  TypeAndMoveContainer,
  TypeContainer,
  TypeImg,
  PokeImg,
  ProgessContainer,
  ProgessBar,
  PStatsName,
  PStatsNumber,
  ProgressDiv,
  ContainerMainDetail
} from "./style";
import pokebola from "../../../public/assets/pokebola.png";

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
    pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  }

  useEffect(() => {
    getPokemonByName(nome, setPokemon);
  }, []);

  return (
    <ContainerMainDetail>
      <PokeInfoContainer colorType={pokemonType}>
        <ImageContainer>
          <ImgWrapper src={pokemon.sprites?.front_default} />
          <ImgWrapper src={pokemon.sprites?.back_default} />
        </ImageContainer>
        <StateContainer>
          <TitleContainer>Base stats </TitleContainer>
          <ProgessContainer>
            {pokemon.stats?.map((pokeItem, index) => {
              return (
                <section>
                  <PStatsName key={index}>
                    <strong>{pokeItem.stat.name}</strong>:
                  </PStatsName>
                  <PStatsNumber>{pokeItem.base_stat}</PStatsNumber>
                  <ProgressDiv>
                    <ProgessBar widthBar={pokeItem.base_stat}></ProgessBar>
                  </ProgressDiv>
                </section>
              );
            })}
          </ProgessContainer>
        </StateContainer>
        <PokeImg
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={`Imagem do pokemon ${pokemon.name}`}
        />
        <PokeballImg src={pokebola} />
        <TypeAndMoveContainer>
          <TypeContainer>
            <p>#{pokemonId}</p>
            <h1>{pokemonName}</h1>
            <div>
              {pokemon.types?.map((pokeItem, index) => {
                return (
                  <TypeImg key={index} src={returnTypes(pokeItem.type.name)} />
                );
              })}
            </div>
          </TypeContainer>

          <MovesContainer>
            <TitleContainer>Moves</TitleContainer>
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
        </TypeAndMoveContainer>
      </PokeInfoContainer>
    </ContainerMainDetail>
  );
};
export default PokemonDetailPage;
