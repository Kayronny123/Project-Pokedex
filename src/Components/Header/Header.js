import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../../api/request";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/cordinatos";
import {
  HeaderConteiner,
  LeftHeaderButton,
  PokeLogo,
  RightHeaderButton
} from "./style";
import logopokemon from "../../../public/assets/logopokemon.png";

const Header = () => {
  let leftButtonText;
  let nextPage;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pokeName = pathname.split("/")[2];

  const {
    pokedex,
    setPokedex,
    removePokemon,
    setIsOpen,
    setControlModal
  } = useContext(GlobalStateContext);

  const isPokemonInPokedex = pokedex.find(
    (pokeItem) => pokeItem.name === pokeName
  );
  const addPokedex = (name) => {
    setIsOpen(true);
    setControlModal(1);
    getPokemonByName(name, (pokeData) => {
      setPokedex([...pokedex, pokeData]);
    });
  };

  if (pathname === "/") {
    leftButtonText = "Todos Pokemons";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    leftButtonText = "Todos Pokemons";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/detalhes")) {
    leftButtonText = "Todos Pokemons";
    nextPage = () => goToPokemonListPage(navigate);
  }

  return (
    <HeaderConteiner>
      {pathname === "/pokedex" || pathname.includes("/detalhes") ? (
        <LeftHeaderButton onClick={nextPage}>
          <u>&lt;{leftButtonText}</u>
        </LeftHeaderButton>
      ) : (
        <RightHeaderButton onClick={nextPage}>
          <b>Pokédex</b>
        </RightHeaderButton>
      )}

      <PokeLogo src={logopokemon} />
      {pathname.includes("/detalhes/") &&
        (isPokemonInPokedex ? (
          <RightHeaderButton red onClick={() => removePokemon(pokeName)}>
            Excluir da Pokedex
          </RightHeaderButton>
        ) : (
          <RightHeaderButton onClick={() => addPokedex(pokeName)}>
            Adicionar a Pokedex
          </RightHeaderButton>
        ))}
    </HeaderConteiner>
  );
};

export default Header;
