import { Flex, Image, Text, Button, Box, Spacer, Grid } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const PokemonDetailImage = ({ sprites, name, boxSize }) => {
  return (
    <Flex as="section" zIndex={3} width="100%" height="100%">
      <Carousel>
        <Flex direction="column" height="100%" zIndex={2}>
          <Image
            boxSize={boxSize}
            objectFit="contain"
            top="4"
            src={
              sprites.other && sprites.other["official-artwork"].front_default
            }
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
            src={sprites.other && sprites.other.home.front_default}
            alt={name}
            zIndex="5"
          />
        </Flex>
        <Flex direction="column" height="100%" zIndex={2}>
          <Image
            boxSize={boxSize}
            objectFit="contain"
            src={sprites.other && sprites.front_default}
            alt={name}
            zIndex="5"
          />
        </Flex>
      </Carousel>
    </Flex>
  );
};

export default PokemonDetailImage;
