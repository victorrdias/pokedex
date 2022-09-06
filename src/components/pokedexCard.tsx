import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text, Image } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { colors } from "../lib/pokemonColorsByType";

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

  const pokeColor = colors[firstPokeType];

  return (
    <Flex
      direction="column"
      boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      borderRadius="4"
      boxSize="12rem"
      bg={pokeColor}
      height="18rem"
      rounded="lg"
      align="center"
      justify="center"
      zIndex={10}
    >
      <Image
        src="./assets/pokeball.png"
        position="absolute"
        opacity="0.04"
        objectFit="cover"
        height="15rem"
        width="12rem"
        filter="grayscale(100%)"
      />
      <IconButton
        alignSelf="flex-start"
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

      <Flex direction="row" gap="4" height="max-content" padding="1">
        <Text textAlign="center" fontWeight="extrabold" color="#2b1906">
          {pokemon.name.toUpperCase()}
        </Text>
        <Text fontWeight="semibold" textAlign="center" color="#2b1906">
          {pokemon.weight + " Kg"}
        </Text>
      </Flex>
      <Text fontWeight="semibold" textAlign="center" color="#2b1906">
        {pokeType.join(" | ")}
      </Text>
    </Flex>
  );
};

export default PokedexCard;
