import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import { getPokemonDataByUrl, getPokemons } from "../api";
import Pokedex from "../pokedex";
import SearchBar from "../SearchBar/searchBar";

const FetchPokemons = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokeAPI.Pokemon[] | null>(null);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const pokemons = data as PokeAPI.NamedAPIResource[];
      console.log("pokepoke", pokemons);
      return pokemons;
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const fetchPokemonData = async (url: string) => {
    try {
      const data = await getPokemonDataByUrl(url);
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
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </Flex>
  );
};

export default FetchPokemons;
