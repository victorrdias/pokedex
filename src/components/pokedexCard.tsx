import { InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, Image, Tag } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { colors } from "../lib/pokemonColorsByType";
import { tagColors } from "../lib/tagColors";

import { PokemonImage } from "./pokemonDetails/pokemonImage";

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

  let navigate = useNavigate();

  return (
    <Flex
      direction="column"
      boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      borderRadius="4"
      boxSize="12rem"
      bg={pokeColor}
      height="max-content"
      rounded="lg"
      align="center"
      justify="center"
      zIndex={10}
      pb="4"
      gap="3"
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
      <Flex alignSelf="flex-start" gap="7rem">
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
        <IconButton
          aria-label="pokemon-details"
          onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          bgColor="transparent"
          _hover={{
            bgColor: "transparent",
            color: "yellow.200",
          }}
          icon={<InfoOutlineIcon />}
        />
      </Flex>
      <PokemonImage
        boxSize="12rem"
        name={pokemon.name}
        sprites={pokemon.sprites}
      />

      <Flex flexWrap="wrap" justify="center" gap="2" height="max-content">
        <Text textAlign="center" fontWeight="extrabold" color="black">
          {pokemon.name.toUpperCase()}
        </Text>
      </Flex>
      <Flex gap="3">
        {pokeType.map((type) => (
          <Tag
            boxShadow="md"
            textTransform="capitalize"
            fontWeight="semibold"
            textAlign="center"
            color="white"
            bg={tagColors[type]}
          >
            {type}
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default PokedexCard;
