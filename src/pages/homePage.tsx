import React from "react";
import { Flex } from "@chakra-ui/react";
import FetchPokemons from "../components/FetchPokemons/FetchPokemons";

const HomePage = () => {
  return (
    <Flex as="main" direction="column" py="4" height="100%">
      <FetchPokemons />
    </Flex>
  );
};

export default HomePage;
