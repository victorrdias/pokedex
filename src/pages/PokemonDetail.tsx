import { RepeatIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDataById } from "../components/api";
import PokemonDetailImage from "../components/pokemonDetailImage";
import { PokemonImage } from "../components/pokemonImage";
import PokemonStat from "../components/pokemonStat";
import { colors } from "../lib/pokemonColorsByType";
import { setTagTextColor } from "../lib/setTagTextColor";

type PokemonPosition = "FRONT" | "BACK";

const PokemonDetail: React.FC = () => {
  const params = useParams();
  const pokemonId = params.id;

  const [pokemonImg, setPokemonImg] = useState<PokemonPosition>("FRONT");

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

  const handleTurnOver = () => {
    if (pokemonImg === "FRONT") setPokemonImg("BACK");
    else setPokemonImg("FRONT");
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
      <Container>
        <Flex
          maxW={{ base: "100%", md: "xl" }}
          maxH={{ base: "350px", md: "350px" }}
          direction="column"
          //boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
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
          <PokemonDetailImage
            sprites={pokemon.sprites}
            name={pokemon.name}
            boxSize="275px"
            pokemonImg={pokemonImg}
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
          paddingTop="8"
          paddingBottom="10"
          paddingX="10"
          top="-10"
          position="relative"
          align="center"
          justify="center"
          gap="2"
        >
          <Flex
            mb="-4"
            gap={4}
            position="relative"
            left={{ base: "6rem", sm: "11rem", md: "11rem", lg: "11rem" }}
            bottom="1rem"
          >
            <IconButton
              onClick={() => {
                handleTurnOver();
              }}
              color="black"
              bgColor="gray"
              aria-label="turnover pokemon"
              icon={<RepeatIcon />}
            ></IconButton>

            <IconButton
              color="black"
              bgColor="gray"
              aria-label="shiny pokemon"
              icon={<SunIcon />}
            ></IconButton>
          </Flex>

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
                  px={{ base: 4, md: 8 }}
                  textTransform="capitalize"
                  bg={colors[type.type.name]}
                >
                  {type.type.name}
                </Tag>
              );
            })}
          </Flex>

          <Flex justify="space-between" w="100%" py="4">
            <Flex
              align="center"
              direction="column"
              px={{ base: "0", md: "12", lg: "12" }}
            >
              <Text fontWeight="bold" fontSize="xl">
                {pokemon.height}m
              </Text>
              <Text fontWeight="semibold">height</Text>
            </Flex>

            <Flex
              align="center"
              direction="column"
              px={{ base: "0", md: "4", lg: "4" }}
            >
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
