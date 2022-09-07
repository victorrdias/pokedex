import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDataById } from "../components/api";
import { PokemonImage } from "../components/pokemonImage";
import SearchBar from "../components/SearchBar/searchBar";
import { colors } from "../lib/pokemonColorsByType";

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemonId = params.id;

  let navigate = useNavigate();

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
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        aria-label="back"
        bgColor="#4873ff"
        color="black"
        _hover={{
          bgColor: "#3665ff",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar
      </Button>
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
        <Text color="white">name: {pokemon.name}</Text>
        <Text color="white">height: {pokemon.height}m</Text>
        <Text color="white">weight: {pokemon.weight}kg</Text>
        <Text color="white">HP: {pokemon.stats[0].base_stat}</Text>
        <Text color="white">attack: {pokemon.stats[1].base_stat}</Text>
        <Text color="white">defense: {pokemon.stats[2].base_stat}</Text>
        <Text color="white">special attack: {pokemon.stats[3].base_stat}</Text>
        <Text color="white">special defense: {pokemon.stats[4].base_stat}</Text>
      </Flex>
    </Flex>
  );
};

export default PokemonDetail;
