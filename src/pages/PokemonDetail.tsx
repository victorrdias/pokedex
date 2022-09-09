import React from "react";
import { Flex } from "@chakra-ui/react";
import PokemonDetailsCard from "../components/pokemonDetails/pokemonDetailsCard";

const PokemonDetail: React.FC = () => {
  return (
    <Flex
      as="main"
      direction="column"
      py="4"
      height="100%"
      minH="90vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <PokemonDetailsCard />
    </Flex>
  );
};

export default PokemonDetail;
