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

// import React from "react";
// import { useState, createContext } from "react";
// import { PokeAPI } from "pokeapi-types";

// type FavoriteContextType = {
//   favorites: PokeAPI.Pokemon[];
//   setFavorites: React.Dispatch<React.SetStateAction<PokeAPI.Pokemon[]>>;
//   addFavorite: (pokemon: PokeAPI.Pokemon) => void;
//   deleteFavorite: (pokemon: PokeAPI.Pokemon) => void;
// };
// const FavoriteContext = createContext<FavoriteContextType>(null);

// export const FavoritePokemonsProvider = ({ children }) => {

//   const [favorites, setFavorites] = useState<PokeAPI.Pokemon[]>([]);

//   const addFavorite = (pokemon: PokeAPI.Pokemon) => {
//     const newFavoriteList = favorites;
//     if (!favorites.includes(pokemon)) newFavoriteList.push(pokemon);
//     setFavorites(newFavoriteList);
//     console.log("addfav", newFavoriteList);
//   };

//   const deleteFavorite = (pokemon: PokeAPI.Pokemon) => {
//     let newFavoriteList = favorites;
//     if (favorites.includes(pokemon)) {
//       const filteredList = newFavoriteList.filter((favorite) => {
//         return pokemon !== favorite;
//       });
//       newFavoriteList = filteredList;
//     }
//     console.log("list", newFavoriteList);

//     setFavorites(newFavoriteList);
//   };

//   return (
//     <FavoriteContext.Provider
//       value={{
//         favorites,
//         setFavorites,
//         addFavorite,
//         deleteFavorite,
//       }}
//     >
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export default FavoriteContext;
