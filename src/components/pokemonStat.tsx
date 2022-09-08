import { Flex, Progress, Text } from "@chakra-ui/react";
import { PokeAPI } from "pokeapi-types";
import React from "react";

const PokemonStat: React.FC<{ stat: PokeAPI.PokemonStat }> = ({ stat }) => {
  const setStatNameInitials = (name: string) => {
    switch (name) {
      case "hp":
        return "HP";
      case "attack":
        return "ATK";
      case "defense":
        return "DEF";
      case "special-attack":
        return "SATK";
      case "special-defense":
        return "SDEF";
      case "speed":
        return "SPD";
      default:
        break;
    }
  };

  const setStatColor = (stat: string) => {
    switch (stat) {
      case "hp":
        return "red";
      case "attack":
        return "orange";
      case "defense":
        return "yellow";
      case "special-attack":
        return "blue";
      case "special-defense":
        return "green";
      case "speed":
        return "pink";
      default:
        break;
    }
  };

  return (
    <Flex alignItems="center" gap={1}>
      <Text minW="40px" fontWeight="semibold">
        {setStatNameInitials(stat.stat.name)}
      </Text>
      <Progress
        size="lg"
        width="100%"
        rounded="full"
        colorScheme={setStatColor(stat.stat.name)}
        value={(stat.base_stat * 100) / 255}
      ></Progress>
    </Flex>
  );
};

export default PokemonStat;
