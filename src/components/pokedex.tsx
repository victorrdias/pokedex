import { Center, Flex, Spinner } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useState } from "react";
import Pagination from "./SearchBar/pagination";
import Pokemon from "./pokedexCard";

const Pokedex: React.FC<{
  pokemons: PokeAPI.Pokemon[];
  loading: boolean;
}> = ({ pokemons, loading }) => {
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 16;
  const totalPages = pokemons !== null && pokemons.length / pokemonsPerPage;
  const [isFavorite, setIsFavorite] = useState(false);

  const onLeftClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const onRightClick = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const paginate = (array: PokeAPI.Pokemon[], size: number, number: number) => {
    return array.slice((number - 1) * size, number * size);
  };

  const filteredPokemons =
    pokemons && paginate(pokemons, pokemonsPerPage, page);

  return (
    <Flex as="section" direction="column" px="5" alignItems="center" gap="4">
      <Flex mb="-4">
        <Pagination
          totalPages={totalPages}
          page={page}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </Flex>
      {loading || !pokemons ? (
        <Center minH="50vh">
          <Spinner thickness="5px" size="xl" color="white" />
        </Center>
      ) : (
        <Flex
          as="article"
          justifyContent="center"
          flexWrap="wrap"
          mt="5"
          gap={5}
        >
          {filteredPokemons &&
            filteredPokemons.map((pokemon, index) => {
              return (
                <Pokemon
                  key={index}
                  pokemon={pokemon}
                  isFavorite={isFavorite}
                />
              );
            })}
        </Flex>
      )}
    </Flex>
  );
};

export default Pokedex;
