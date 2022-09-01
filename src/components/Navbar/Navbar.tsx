import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Flex bgColor="yellow.600" height="10vh" justifyContent="center">
      <Flex alignItems="center" alignContent="flex-start">
        <Button
          aria-label="home page"
          bgColor="yellow.600"
          _hover={{
            bgColor: "yellow.200",
          }}
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </Button>
      </Flex>

      <Image alt="pokeapi-logo" src={logoImg} className="navbar" />
    </Flex>
  );
};

export default Navbar;
