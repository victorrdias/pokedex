import { PokeAPI } from "pokeapi-types";

export const searchPokemon = async (
  pokeName: string
): Promise<PokeAPI.Pokemon> => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    const response = await fetch(url);
    const pokemon: PokeAPI.Pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemons = async (
  Limit = 320,
  offset = 0
): Promise<PokeAPI.NamedAPIResource[]> => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${Limit}&offset=${offset}`;
    const response = await fetch(url);
    const data: PokeAPI.NamedAPIResourceList = await response.json();

    return data.results;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemonData = async (url): Promise<PokeAPI.Pokemon> => {
  try {
    const response = await fetch(url);
    const data: PokeAPI.Pokemon = await response.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
