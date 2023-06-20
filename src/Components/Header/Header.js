import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../../api/request";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/cordinatos";
import { RightHeaderButton } from "./style";
import { HeaderConteiner, LeftHeaderButton } from "./style";

const Header = () => {
  let titlePage;
  let leftButtonText;
  let nextPage;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pokeName = pathname.split("/")[2];

  const { pokedex, setPokedex, removePokemon } = useContext(GlobalStateContext);

  const isPokemonInPokedex = pokedex.find(
    (pokeItem) => pokeItem.name === pokeName
  );
  const addPokedex = (name) => {
    getPokemonByName(name, (pokeData) => {
      setPokedex([...pokedex, pokeData]);
    });
  };

  if (pathname === "/") {
    titlePage = "Lista de pokemons";
    leftButtonText = "Ver minha Pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    leftButtonText = "Voltar para lista de pokemons";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/detalhes")) {
    titlePage = pokeName;
    leftButtonText = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  }

  return (
    <HeaderConteiner>
      <LeftHeaderButton onClick={nextPage}>{leftButtonText}</LeftHeaderButton>
      <h1>{titlePage}</h1>
      {pathname.includes("/detalhes/") &&
        (isPokemonInPokedex ? (
          <RightHeaderButton onClick={() => removePokemon(pokeName)}>
            Remover da Pokedex
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
