import React from "react";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
  ModalFooter,
  Spacer,
} from "@chakra-ui/react";

import { PokeAPI } from "pokeapi-types";
import { PokemonImage } from "../pokemonDetails/pokemonImage";
import { colors } from "../../lib/pokemonColorsByType";

export const PokemonModal: React.FC<{
  pokemon: PokeAPI.Pokemon;
  isOpen: boolean;
  onClose: () => void;
}> = ({ pokemon, isOpen, onClose }) => {
  if (pokemon === null) return null;

  const pokeType = pokemon && pokemon.types.map((type) => type.type.name);

  const firstPokeType = pokeType[0];

  const pokeColor = colors[firstPokeType];

  return (
    <Flex>
      {pokemon ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="4px" bg={pokeColor} boxShadow="dark-lg">
            <ModalHeader
              borderRadius="4"
              bg={pokeColor}
              textAlign="center"
              fontWeight="bold"
              fontSize="xl"
              color="black"
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
              <Spacer />
              {"type: " +
                pokemon.types.map((type) => type.type.name).join(", ")}
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </Flex>
  );
};

export default PokemonModal;
