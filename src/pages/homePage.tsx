import React, { useContext } from "react";
import { Container, Flex } from "@chakra-ui/react";
import Pokedex from "../components/pokedex";
import SearchBar from "../components/SearchBar/searchBar";
import { PokemonContext } from "../contexts/PokemonContext";

const HomePage = () => {
  const { pokemons, loading } = useContext(PokemonContext);
  return (
    <Flex as="main" direction="column" py="4" height="100%">
      <SearchBar />

      <Pokedex pokemons={pokemons} loading={loading} />
    </Flex>
  );
};

export default HomePage;
