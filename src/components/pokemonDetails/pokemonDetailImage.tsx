import { Flex, Image, Switch } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const PokemonDetailImage = ({ sprites, name, boxSize, pokemonImg }) => {
  const setPokemonSprite = (pokemonImg: string) => {
    switch (pokemonImg) {
      case "FRONT_NORMAL":
        return sprites.front_default;
      case "FRONT_SHINY":
        return sprites.front_shiny;
      case "BACK_NORMAL":
        return sprites.back_default;
      case "BACK_SHINY":
        return sprites.back_shiny;
      default:
        break;
    }
  };
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
          <Image
            boxSize={boxSize}
            objectFit="contain"
            src={setPokemonSprite(pokemonImg)}
            alt={name}
            zIndex="5"
          />
        </Flex>
      </Carousel>
    </Flex>
  );
};

export default PokemonDetailImage;
