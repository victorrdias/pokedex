import { PokeAPI } from "pokeapi-types";
import React, { useEffect, useState } from "react";

interface FavoriteContextProps {
  favorites: PokeAPI.Pokemon[];
  setFavorites: React.Dispatch<React.SetStateAction<PokeAPI.Pokemon[]>>;
  loading: boolean;
}

export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: [],
  setFavorites: () => console.warn("setFavorites is not ready"),
  loading: true,
});

const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokeAPI.Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        loading,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
