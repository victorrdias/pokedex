import React from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  ModalFooter,
  Spacer,
} from "@chakra-ui/react";

import { PokeAPI } from "pokeapi-types";
import { PokemonImage } from "../pokemonImage";

export const PokemonModal: React.FC<{ pokemon: PokeAPI.Pokemon }> = ({
  pokemon,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button
        color="#2b1906"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        onClick={onOpen}
        bgColor="yellow.400"
        _hover={{
          bgColor: "yellow.500",
        }}
      >
        Buscar
      </Button>
      {pokemon ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            borderRadius="4px"
            bgColor="yellow.500"
            boxShadow="dark-lg"
          >
            <ModalHeader
              borderRadius="4"
              bgColor="yellow.700"
              textAlign="center"
              fontWeight="bold"
              fontSize="xl"
              textColor="yellow.500"
            >
              {pokemon.name.toUpperCase()}
            </ModalHeader>
            <ModalCloseButton />
            <Box>
              <ModalBody>
                <PokemonImage
                  boxSize="sm"
                  sprites={pokemon.sprites}
                  name={pokemon.name}
                />
              </ModalBody>
            </Box>
            <ModalFooter
              px="12"
              color="#2b1906"
              textAlign="center"
              fontWeight="bold"
              fontSize="xl"
            >
              {pokemon.weight + " kg"}
              <Spacer />
              {pokemon.height + " Metros"}
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </Flex>
  );
};

export default PokemonModal;
