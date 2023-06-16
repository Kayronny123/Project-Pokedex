import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";

const Router = () => {
  const [pokedex, setPokedex] = useState([]);

  const addPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
  };
  const removePokemon = (pokeName) => {
    setPokedex(pokedex.filter((pokeItem) => pokeItem.name !== pokeName));
  };
  return (
    <BrowserRouter>
      <Header
        pokedex={pokedex}
        setPokedex={setPokedex}
        removePokemon={removePokemon}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PokemonListPage
              pokedex={pokedex}
              setPokedex={setPokedex}
              addPokemon={addPokemon}
              removePokemon={removePokemon}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokedex={pokedex}
              setPokedex={setPokedex}
              removePokemon={removePokemon}
            />
          }
        />
        <Route path="/detalhes/:nome" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
