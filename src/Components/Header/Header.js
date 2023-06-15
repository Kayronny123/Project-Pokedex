import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/cordinatos";
import { RightHeaderButton } from "./style";
import { HeaderConteiner, LeftHeaderButton } from "./style";

const Header = ({ page, setPage }) => {
  let titlePage;
  let leftButtonText;
  let nextPage;

  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (pathname === "/") {
    titlePage = "Lista de pokemons";
    leftButtonText = "Ver minha Pokedex";
    nextPage = () => goToPokedexPage(navigate);
  } else if (pathname === "/pokedex") {
    titlePage = "Pokedex";
    leftButtonText = "Voltar para lista de pokemons";
    nextPage = () => goToPokemonListPage(navigate);
  } else if (pathname.includes("/detalhes")) {
    titlePage = pathname.split("/")[2];
    leftButtonText = "Voltar";
    nextPage = () => goToPokemonListPage(navigate);
  }

  return (
    <HeaderConteiner>
      <LeftHeaderButton onClick={nextPage}>{leftButtonText}</LeftHeaderButton>
      <h1>{titlePage}</h1>
      {pathname.includes("/detalhes/") ? (
        <RightHeaderButton>Adicionar / Remover da Pokedex</RightHeaderButton>
      ) : (
        <></>
      )}
    </HeaderConteiner>
  );
};

export default Header;
