import { useState } from "react";
import Header from "./Components/Header/Header";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header page={page} setPage={setPage} />
      <PokemonCard />
    </>
  );
}
