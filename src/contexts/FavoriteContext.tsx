import { PokeAPI } from "pokeapi-types";
import React, { useState } from "react";

interface FavoriteContextProps {
  favorites: PokeAPI.Pokemon[];
  setFavorites: React.Dispatch<React.SetStateAction<PokeAPI.Pokemon[]>>;
}

export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: [],
  setFavorites: () => console.warn("setFavorites is not ready"),
});

const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokeAPI.Pokemon[]>([]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
