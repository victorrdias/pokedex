import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import FavoriteContext from "../../contexts/favoritesContext";
import { searchPokemon } from "../api";
import PokemonModal from "./pokemonModal";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);

  useContext(FavoriteContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = async (pokemon: string) => {
    try {
      if (pokemon.length > 0) {
        const result: PokeAPI.Pokemon = await searchPokemon(pokemon);
        console.log("result ", result);
        if (result !== undefined) setPokemon(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    onSearchHandler(search);
  }, [search]);

  return (
    <Flex justifyContent="center" m="6" gap="4">
      <Input
        box-shadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        bgColor="yellow.400"
        textAlign="center"
        textColor="yellow.900"
        placeholder="Buscar pokemon"
        _placeholder={{
          color: "#2b1906",
        }}
        onChange={onChange}
        width="12rem"
        alignContent="center"
      />

      <PokemonModal pokemon={pokemon} />
      <IconButton
        aria-label="Favorites page"
        icon={<StarIcon />}
        bgColor="yellow.400"
        _hover={{
          color: "yellow.200",
        }}
        onClick={() => {
          navigate("/favorites");
        }}
      ></IconButton>
    </Flex>
  );
};

export default SearchBar;

/**
 * @todo colocar um onClick para o botao mostrar o pokemon de costas
 */
