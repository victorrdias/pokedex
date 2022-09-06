import { Image } from "@chakra-ui/react";
import React from "react";

export const PokemonImage = ({ sprites, name, boxSize }) => {
  return (
    <Image
      boxSize={boxSize}
      src={sprites.other && sprites.other.home.front_default}
      alt={name}
      zIndex="5"
    />
  );
};
