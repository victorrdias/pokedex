import { Image } from "@chakra-ui/react";

export const PokemonImage = ({ sprites, name, boxSize }) => {
  return (
    <Image
      boxSize={boxSize}
      src={sprites.other && sprites.other["official-artwork"].front_default}
      alt={name}
      zIndex="5"
    />
  );
};
