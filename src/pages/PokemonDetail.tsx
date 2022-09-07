import { Box, Flex, Image, Progress, Tag, Text } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDataById } from "../components/api";
import { PokemonImage } from "../components/pokemonImage";

import { colors } from "../lib/pokemonColorsByType";

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemonId = params.id;

  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon>(null);

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

  if (!pokemon) {
    return null;
  }

  const pokeType = pokemon.types.map((type) => type.type.name);

  const firstPokeType = pokeType[0];

  const pokeColor = colors[firstPokeType];

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
      <Flex
        direction="column"
        // boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        borderRadius="4"
        boxSize="12rem"
        bg={pokeColor}
        height="70%"
        width="70%"
        rounded="3xl"
        align="center"
        justify="center"
        zIndex={2}
        pb="4"
        gap="3"
      >
        <PokemonImage
          sprites={pokemon.sprites}
          name={pokemon.name}
          boxSize="12rem"
        />
      </Flex>
      <Flex
        textTransform="capitalize"
        direction="column"
        boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        boxSize="12rem"
        bg="grey"
        height="70%"
        width="70%"
        rounded="3xl"
        paddingTop="20"
        paddingBottom="10"
        top="-10"
        position="relative"
        align="center"
        justify="center"
        zIndex={1}
        gap="2"
      >
        <Text
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          fontSize="xl"
          color="white"
        >
          {" "}
          {pokemon.name}
        </Text>

        <Flex gap="2">
          {" "}
          {pokemon.types.map((type) => {
            return (
              <Tag textTransform="capitalize" bg={colors[type.type.name]}>
                {type.type.name}
              </Tag>
            );
          })}
        </Flex>

        <Text color="white">height: {pokemon.height}m</Text>
        <Text color="white">weight: {pokemon.weight}kg</Text>

        <Progress
          rounded="full"
          id="hp"
          width="8rem"
          colorScheme="red"
          value={pokemon.stats[0].base_stat}
        ></Progress>

        <Progress
          rounded="full"
          id="attack"
          width="8rem"
          colorScheme="orange"
          value={pokemon.stats[1].base_stat}
        ></Progress>

        <Progress
          rounded="full"
          id="defense"
          width="8rem"
          colorScheme="blue"
          value={pokemon.stats[2].base_stat}
        ></Progress>

        <Progress
          rounded="full"
          id="speed"
          width="8rem"
          colorScheme="teal"
          value={pokemon.stats[5].base_stat}
        ></Progress>

        <Progress
          rounded="full"
          id="experience"
          width="8rem"
          colorScheme="purple"
          value={pokemon.base_experience}
        ></Progress>
      </Flex>
    </Flex>
  );
};

export default PokemonDetail;
