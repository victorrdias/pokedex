import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  let navigate = useNavigate();

  const logoImg = "https://img.icons8.com/plasticine/344/squirtle.png";

  return (
    <>
      <Flex
        as="header"
        height="10vh"
        width="100%"
        justifyContent="center"
        bgColor="transparent"
        paddingX={{ base: "5", md: "7" }}
      >
        <Flex flexGrow="1" align="center" boxSize="6rem">
          <Image
            boxSize="6rem"
            alt="pokeapi-logo"
            src={logoImg}
            className="navbar"
          />

          <Flex>
            <Text
              fontWeight="bold"
              ml="4"
              display={{ base: "block", md: "initial" }}
              color={{ base: "#1c246d", md: "white" }}
              fontSize="3xl"
              align="center"
            >
              POKEDEX
            </Text>
          </Flex>
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
