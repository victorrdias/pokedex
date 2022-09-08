import { Container, Flex, Image, Tag, Text } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDataById } from "../components/api";
import { PokemonImage } from "../components/pokemonImage";
import PokemonStat from "../components/pokemonStat";
import { colors } from "../lib/pokemonColorsByType";
import { setTagTextColor } from "../lib/setTagTextColor";

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
      paddingX="10"
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
      <Container>
        <Flex
          direction="column"
          // boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          borderRadius="4"
          boxSize="12rem"
          bg={pokeColor}
          height="100%"
          width="100%"
          rounded="3xl"
          align="center"
          justify="center"
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
          bg="#2b292c"
          color="white"
          height="100%"
          width="100%"
          rounded="3xl"
          paddingTop="20"
          paddingBottom="10"
          paddingX="10"
          top="-10"
          position="relative"
          align="center"
          justify="center"
          gap="2"
        >
          <Text
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            fontSize="xl"
          >
            {" "}
            {pokemon.name}
          </Text>

          <Flex gap="6">
            {" "}
            {pokemon.types.map((type) => {
              return (
                <Tag
                  color={setTagTextColor(type.type.name)}
                  size="lg"
                  px={8}
                  textTransform="capitalize"
                  bg={colors[type.type.name]}
                >
                  {type.type.name}
                </Tag>
              );
            })}
          </Flex>

          <Flex justify="space-between" w="100%" py="4">
            <Flex align="center" direction="column" px="12">
              <Text fontWeight="bold" fontSize="xl">
                {pokemon.height}m
              </Text>
              <Text fontWeight="semibold">height</Text>
            </Flex>

            <Flex align="center" direction="column" px="12">
              <Text fontWeight="bold" fontSize="xl">
                {pokemon.weight}kg
              </Text>
              <Text fontWeight="semibold">weight</Text>
            </Flex>
          </Flex>

          <Flex as="section" direction="column" w="100%" gap={"1.5"}>
            {pokemon.stats.map((stat) => {
              return <PokemonStat stat={stat} />;
            })}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default PokemonDetail;
