import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";

const Navbar = () => {
  const logoImg =
    "https://img2.gratispng.com/20180715/sux/kisspng-computer-icons-insegna-font-pokeball-blue-5b4b065f84c9f3.5177187915316434875439.jpg";
  return (
    <>
      <Flex height="10vh" justifyContent="center">
        <Image alt="pokeapi-logo" src={logoImg} className="navbar" />

        <Flex justify="center" align="center"></Flex>
      </Flex>
    </>
  );
};

export default Navbar;
