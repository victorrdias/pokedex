import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import PokedexFavorites from "../components/pokedexFavorites";
import SearchBar from "../components/SearchBar/searchBar";
import { FavoriteContext } from "../contexts/FavoriteContext";

const FavoritesPage = () => {
  const { favorites, loading } = useContext(FavoriteContext);
  console.log("favorites", favorites);
  console.log("loading", loading);
  return (
    <Flex as="main" direction="column" py="4" height="100%">
      <SearchBar />
      {loading || !favorites ? (
        <div>Carregando</div>
      ) : (
        <PokedexFavorites loading={loading} />
      )}
    </Flex>
  );
};

export default FavoritesPage;
