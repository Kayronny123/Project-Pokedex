import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elememt={<PokemonListPage />} />
        <Route path="/pokedex" elememt={<PokedexPage />} />
        <Route path="/detalhes/:nome" elememt={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
