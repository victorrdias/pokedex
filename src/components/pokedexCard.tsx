import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

import { PokemonImage } from "./pokemonImage";

const PokedexCard: React.FC<{
  pokemon: PokeAPI.Pokemon;
  isFavorite: boolean;
}> = ({ pokemon }) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const addPokemonToFavorite = (pokemon: PokeAPI.Pokemon) => {
    setFavorites([...favorites, pokemon]);
  };

  const removePokemonFromFavorite = () => {
    setFavorites(favorites.filter((poke) => poke.name !== pokemon.name));
  };

  const isFavorite = favorites.some((poke) => poke.name === pokemon.name);

  const pokeType = pokemon.types.map((type) => type.type.name);

  const firstPokeType = pokeType[0];

  const colors = {
    fire: "radial-gradient(circle, rgba(184,77,0,1) 0%, rgba(240,128,48,1) 100%)",
    water:
      "radial-gradient(circle, rgba(32,98,255,1) 0%, rgba(104,144,240,1) 100%)",
    grass: "#78C850",
    normal: "#A8A878",
    electric: "#F8D030",
    ice: "#98D8D8",
    ground: "#E0C068",
    flying: "#A890F0",
    ghost: "#705898",
    rock: "#B8A038",
    fighting: "#C03028",
    poison: "#A040A0",
    psychic: "#F85888",
    bug: "#A8B820",
    dark: "#705848",
    steel: "#B8B8D0",
    dragon: "#7038F8",
    fairy: "#e3a3ff",
  };

  const pokeColor = colors[firstPokeType];

  return (
    <Box
      boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      borderRadius="4"
      boxSize="12rem"
      alignItems="center"
      bg={pokeColor}
      height="18rem"
      alignContent="center"
      rounded="lg"
    >
      <IconButton
        onClick={() =>
          isFavorite
            ? removePokemonFromFavorite()
            : addPokemonToFavorite(pokemon)
        }
        aria-label="favorite pokemons"
        icon={<StarIcon />}
        color={isFavorite ? "yellow.200" : "black"}
        bgColor="transparent"
        mb="-4"
        _hover={{
          color: "yellow.200",
        }}
      />

      <Flex>
        <PokemonImage
          boxSize="12rem"
          name={pokemon.name}
          sprites={pokemon.sprites}
        />
      </Flex>

      <Flex direction="column" height="max-content">
        <Text textAlign="center" fontWeight="extrabold" color="#2b1906">
          {pokemon.name}
        </Text>
        <Text fontWeight="semibold" textAlign="center" color="#2b1906">
          {pokemon.weight + " Kg"}
        </Text>
        <Text fontWeight="semibold" textAlign="center" color="#2b1906">
          {pokeType.join(" | ")}
        </Text>
      </Flex>
    </Box>
  );
};

export default PokedexCard;
