import { Flex } from "@chakra-ui/react";
import React from "react";
import FetchFavoritePokemons from "../components/FetchPokemons/FetchFavoritePokemons";

const FavoritesPage = () => {
  return (
    <Flex>
      <FetchFavoritePokemons />;
    </Flex>
  );
};

export default FavoritesPage;
