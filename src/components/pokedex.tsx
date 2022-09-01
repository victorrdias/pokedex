import { Flex } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import Pagination from "./pagination";
import Pokemon from "./pokemon";

const Pokedex: React.FC<{
  pokemons: PokeAPI.Pokemon[];
  loading: boolean;
}> = ({ pokemons, loading }) => {
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 16;
  const totalPages = pokemons !== null && pokemons.length / pokemonsPerPage;

  const { favorites } = useContext(FavoriteContext);
  const onLeftClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const onRightClick = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const paginate = (array: PokeAPI.Pokemon[], size: number, number: number) => {
    return array.slice((number - 1) * size, number * size);
  };

  const favoritesHandler = (name: string) => {
    try {
      const isFavorite = favorites.some((favorite) => favorite.name === name);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   favoritesHandler(pokemon.name);
  // }, []);

  const filteredPokemons =
    pokemons && paginate(pokemons, pokemonsPerPage, page);
  return (
    <Flex direction="column" px="5" alignItems="center" gap="4">
      <Flex>
        <Pagination
          totalPages={totalPages}
          page={page}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </Flex>
      {loading || !pokemons ? (
        <div>Carregando</div>
      ) : (
        <Flex justifyContent="center" flexWrap="wrap" mt="5" gap={5}>
          {filteredPokemons &&
            filteredPokemons.map((pokemon, index) => {
              favoritesHandler(pokemon.name);
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
