import React, { useEffect, useState } from "react";
import { Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import { searchPokemon } from "../api";
import PokemonModal from "./pokemonModal";
import Pagination from "./pagination";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<PokeAPI.Pokemon | null>(null);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = async (pokemon: string) => {
    try {
      if (pokemon.length > 0) {
        const result: PokeAPI.Pokemon = await searchPokemon(pokemon);
        if (result !== undefined) setPokemon(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onSearchHandler(search);
  }, [search]);

  return (
    <>
      <Flex justifyContent="center" mt="4" mb="2" gap="4">
        <Input
          box-shadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          bgColor="white"
          textAlign="center"
          color="black"
          placeholder="Buscar pokemon"
          _placeholder={{
            color: "gray.500",
          }}
          onChange={onChange}
          width="12rem"
          alignContent="center"
        />
        <PokemonModal pokemon={pokemon} isOpen={isOpen} onClose={onClose} />
        <Button
          color="black"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          onClick={onOpen}
          bgColor="white"
          _hover={{
            bgColor: "#3665ff",
          }}
        >
          Buscar
        </Button>
      </Flex>
    </>
  );
};

export default SearchBar;
