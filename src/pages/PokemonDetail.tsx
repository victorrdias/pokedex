import React from "react";
import { Flex, Image } from "@chakra-ui/react";
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
      <Image
        src="/assets/bgpokedex3.jpg"
        zIndex="-1"
        position="absolute"
        minW="100%"
        minH="100%"
        objectFit="cover"
        top="0"
      />
      <PokemonDetailsCard />
    </Flex>
  );
};

export default PokemonDetail;
