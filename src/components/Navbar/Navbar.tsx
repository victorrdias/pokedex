import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  let navigate = useNavigate();

  const logoImg = "https://img.icons8.com/plasticine/344/squirtle.png";
  return (
    <>
      <Flex as="header" height="10vh" width="100%" justifyContent="center">
        <Flex
          as="nav"
          flexGrow="1"
          paddingX={{ base: "7", md: "28" }}
          justify="flex-start"
          align="center"
          gap="4"
        >
          <Button
            aria-label="home page"
            width={{ base: "6rem", md: "7rem" }}
            leftIcon={<AiFillHome />}
            bgColor="#4873ff"
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
            bgColor="#4873ff"
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
        <Image alt="pokeapi-logo" src={logoImg} className="navbar" />
      </Flex>
    </>
  );
};

export default Navbar;
