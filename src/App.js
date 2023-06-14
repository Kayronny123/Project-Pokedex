import { useState } from "react";
import Header from "./Components/Header/Header";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { GlobalStyle } from "./GlobalStyle";
import PokemonListPage from "./Pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === 0 ? (
        <PokemonListPage />
      ) : page === 1 ? (
        <PokedexPage />
      ) : (
        <PokemonDetailPage />
      )}
    </>
  );
}
