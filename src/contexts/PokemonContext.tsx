import React, { useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types";
import { getPokemonDataByUrl, getPokemons } from "../components/api";

interface PokemonContextProps {
  pokemons: PokeAPI.Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<PokeAPI.Pokemon[]>>;
  loading: boolean;
}

export const PokemonContext = React.createContext<PokemonContextProps>({
  pokemons: [],
  setPokemons: () => console.warn("setFavorites is not ready"),
  loading: true,
});

const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokeAPI.Pokemon[] | null>(null);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const pokemons = data as PokeAPI.NamedAPIResource[];
      console.log("pokepoke", pokemons);
      return pokemons;
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const fetchPokemonData = async (url: string) => {
    try {
      const data = await getPokemonDataByUrl(url);
      const pokemonData = data as PokeAPI.Pokemon;
      return pokemonData;
    } catch (error) {
      console.log("fetchPokemonsData error: ", error);
    }
  };

  const handleFetchData = async () => {
    const pokemonList = await fetchPokemons();

    const pokemonDataList = pokemonList.map(async (pokemon) => {
      const pokemonData = await fetchPokemonData(pokemon.url);
      return pokemonData;
    });

    Promise.all(pokemonDataList).then((res) => {
      setPokemons(res);
    });

    setLoading(false);
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        loading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
