import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  let navigate = useNavigate();

  // const logoImg = "https://img.icons8.com/plasticine/344/squirtle.png";
  // const logoImg = "./assets/pokedexheader.png";
  return (
    <>
      <Flex
        as="header"
        height="10vh"
        width="100%"
        justifyContent="center"
        bgColor="transparent"
        paddingX={{ base: "7", md: "7" }}
      >
        <Flex flexGrow="1" fontSize="3xl" fontWeight="semibold" align="center">
          {/* <Image alt="pokeapi-logo" src={logoImg} className="navbar" /> */}
          <Text color="white">pokedex</Text>
        </Flex>
        <Flex as="nav" justify="flex-end" align="center" gap="4">
          <Button
            aria-label="home page"
            width={{ base: "6rem", md: "7rem" }}
            leftIcon={<AiFillHome />}
            bgColor="white"
            color="black"
            _hover={{
              color: "yellow.200",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>

          <Button
            width={{ base: "7rem", md: "9rem" }}
            aria-label="Favorites page"
            leftIcon={<AiFillStar />}
            bgColor="white"
            color="black"
            _hover={{
              color: "yellow.200",
            }}
            onClick={() => {
              navigate("/favorites");
            }}
          >
            Favoritos
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
