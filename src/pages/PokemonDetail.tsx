import { Flex, Image } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDataById } from "../components/api";

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemonId = params.id;

  const [pokemon, setPokemon] = useState(null);

  const fetchPokemonData = async (id) => {
    try {
      const data = await getPokemonDataById(id);
      const pokemonData = data as PokeAPI.Pokemon;

      return pokemonData;
    } catch (error) {
      console.error("fetchPokemonsData error: ", error);
    }
  };

  const handleFetchPokemonData = async (id) => {
    if (id) {
      const pokeData = await fetchPokemonData(id);
      setPokemon(pokeData);
    }
  };
  useEffect(() => {
    if (pokemonId !== undefined) handleFetchPokemonData(pokemonId);
  }, [pokemonId]);

  return (
    <Flex as="main" direction="column" py="4" height="100%">
      <Image
        src="/assets/bgpokedex3.jpg"
        zIndex="-1"
        position="absolute"
        minW="100%"
        minH="100%"
        objectFit="cover"
        top="0"
      />
    </Flex>
  );
};

export default PokemonDetail;