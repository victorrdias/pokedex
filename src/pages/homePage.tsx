import { Flex, Image } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../components/api";

import Pokedex from "../components/pokedex";
import SearchBar from "../components/SearchBar/searchBar";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokeAPI.Pokemon[] | null>(null);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const pokemons = data as PokeAPI.NamedAPIResource[];
      return pokemons;
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const fetchPokemonData = async (url) => {
    try {
      const data = await getPokemonData(url);
      const pokemonData = data as PokeAPI.Pokemon;
      return pokemonData;
    } catch (error) {
      console.log("fetchPokemonsData error: ", error);
    }
  };

  const handleFetchData = async () => {
    const pokemonList = await fetchPokemons();

    const pokemonDataList = pokemonList.map(async (pokemon) => {
      const pokemonData = await fetchPokemonData(pokemon.url);
      return pokemonData;
    });

    Promise.all(pokemonDataList).then((res) => {
      setPokemons(res);
    });

    setLoading(false);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Flex as="main" direction="column" py="4" height="100%">
      <Image
        src="./assets/bgpokedex3.jpg"
        zIndex="-1"
        position="absolute"
        minW="100%"
        minH="100%"
        objectFit="cover"
        top="0"
      />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </Flex>
  );
};

export default HomePage;
