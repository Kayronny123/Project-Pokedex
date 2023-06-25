import GlobalState from "./Global/GlobalState";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router/Router";
import ModalPokemon from "./Components/Modal/Modal";

export default function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <ModalPokemon />
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}
