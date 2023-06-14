import { RightHeaderButton } from "./style";
import { HeaderConteiner, LeftHeaderButton } from "./style";

const Header = ({ page, setPage }) => {
  let titlePage;
  let leftButtonText;
  let nextPage;

  switch (page) {
    case 0:
      titlePage = "Lista de pokemons";
      leftButtonText = "Ver minha Pokedex";
      nextPage = 1;
      break;
    case 1:
      titlePage = "Pokedex";
      leftButtonText = "Voltar para lista de pokemons";
      nextPage = 2;
      break;
    case 2:
      titlePage = "Nome do Pokemon";
      leftButtonText = "Voltar";
      nextPage = 0;
      break;
    default:
      console.log("Página não existe");
  }

  return (
    <HeaderConteiner>
      <LeftHeaderButton onClick={() => setPage(nextPage)}>
        {leftButtonText}
      </LeftHeaderButton>
      <h1>{titlePage}</h1>
      {page === 2 ? (
        <RightHeaderButton>Adicionar / Remover da Pokedex</RightHeaderButton>
      ) : (
        <></>
      )}
    </HeaderConteiner>
  );
};

export default Header;
