import { Flex } from "@chakra-ui/react";
import React from "react";
import FetchFavoritePokemons from "../components/FetchPokemons/FetchFavoritePokemons";

const FavoritesPage = () => {
  return (
    <Flex as="main" direction="column" py="4" height="100%">
      <FetchFavoritePokemons />;
    </Flex>
  );
};

export default FavoritesPage;
