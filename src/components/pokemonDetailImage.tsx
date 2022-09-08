import { Flex, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const PokemonDetailImage = ({ sprites, name, boxSize, pokemonImg }) => {
  console.log("pokeimg", pokemonImg);
  return (
    <Flex as="section" zIndex={3} width="100%" height="100%">
      <Carousel>
        <Flex direction="column" height="100%" zIndex={2}>
          <Image
            boxSize={boxSize}
            objectFit="contain"
            top="4"
            src={sprites.other["official-artwork"].front_default}
            alt={name}
            zIndex="5"
          />
        </Flex>
        <Flex direction="column" height="100%" zIndex={2}>
          <Image
            boxSize={boxSize}
            objectFit="contain"
            position="relative"
            bottom="3"
            src={sprites.other.home.front_default}
            alt={name}
            zIndex="5"
          />
        </Flex>
        <Flex direction="column" height="100%" zIndex={2}>
          {pokemonImg === "FRONT" ? (
            <Image
              boxSize={boxSize}
              objectFit="contain"
              src={sprites.front_default}
              alt={name}
              zIndex="5"
            />
          ) : (
            <Image
              boxSize={boxSize}
              objectFit="contain"
              src={sprites.back_default}
              alt={name}
              zIndex="5"
            />
          )}
        </Flex>
      </Carousel>
    </Flex>
  );
};

export default PokemonDetailImage;
