import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Flex,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
const ModalPokemon = () => {
  const { isOpen, setIsOpen, controlModal } = useContext(GlobalStateContext);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          {controlModal === 1 ? (
            <Flex
              w={"450px"}
              h={"220px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Heading>Gotcha!!</Heading>
              <Text fontWeight={"bold"}>
                Pokemon foi adicionado a sua pokedex
              </Text>
            </Flex>
          ) : (
            <Flex
              w={"450px"}
              h={"220px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Heading>Oh, no!!</Heading>
              <Text fontWeight={"bold"}>
                O pokemon foi removido da sua pokedex
              </Text>
            </Flex>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPokemon;
