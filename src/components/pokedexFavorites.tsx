import { Flex } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React, { useContext, useState } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

import Pagination from "./pagination";
import PokedexCard from "./pokedexCard";

const PokedexFavorites: React.FC<{
  loading: boolean;
}> = ({ loading }) => {
  const { favorites } = useContext(FavoriteContext);

  const [isFavorite, setIsFavorite] = useState(false);
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 16;
  const totalPages = favorites !== null && favorites.length / pokemonsPerPage;

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
    favorites && paginate(favorites, pokemonsPerPage, page);

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
      {loading || !favorites ? (
        <div>Carregando</div>
      ) : (
        <Flex justifyContent="center" flexWrap="wrap" mt="5" gap={5}>
          {filteredPokemons.map((Pokemon) => (
            <Flex key={Pokemon.name}>
              <PokedexCard pokemon={Pokemon} isFavorite={isFavorite} />
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
export default PokedexFavorites;
