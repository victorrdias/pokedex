import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { PokemonImage } from "./pokemonImage";

const Pokemon: React.FC<{ pokemon: PokeAPI.Pokemon; isFavorite: boolean }> = ({
  pokemon,
  isFavorite,
}) => {
  const { addFavorite, deleteFavorite } = useContext(FavoriteContext);

  console.log("isFavorite", isFavorite);

  const toggleFavoriteHandler = (
    isFavorite: boolean,
    pokemon: PokeAPI.Pokemon
  ) => {
    if (isFavorite === false) {
      addFavorite(pokemon);
    } else {
      deleteFavorite(pokemon);
    }
  };
  console.log("pokemon", isFavorite);
  return (
    <Box
      boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      borderRadius="4"
      boxSize="12rem"
      bgColor="yellow.400"
      alignItems="center"
      height="16  rem"
      alignContent="center"
      rounded="lg"
    >
      <IconButton
        onClick={() => toggleFavoriteHandler(isFavorite, pokemon)}
        aria-label="favorite pokemons"
        icon={<StarIcon />}
        color={isFavorite ? "yellow.200" : "black"}
        bgColor="yellow.400"
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

        <Text fontWeight="medium" textAlign="center" color="#2b1906">
          {pokemon.weight + " Kg"}
        </Text>
      </Flex>
    </Box>
  );
};

export default Pokemon;

// separar as funcoes de toggle delete/add
// adicionar uma propriedade boolean no card do pokemon, para verificar se eh ou nao favorito. Dessa forma, o contexto eh desnecessario.
