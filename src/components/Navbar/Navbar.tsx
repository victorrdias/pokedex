import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  let navigate = useNavigate();

  const logoImg =
    "https://img2.gratispng.com/20180715/sux/kisspng-computer-icons-insegna-font-pokeball-blue-5b4b065f84c9f3.5177187915316434875439.jpg";
  return (
    <>
      <Flex as="header" height="10vh" width="100%" justifyContent="center">
        <Flex
          as="nav"
          flexGrow="1"
          paddingX="14"
          justify="flex-start"
          align="center"
          gap="4"
        >
          <Button
            aria-label="home page"
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
