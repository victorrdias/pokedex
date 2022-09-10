import { ButtonGroup, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      bg="transparent"
      minH="20vh"
      w="100%"
      paddingY={8}
      direction="column"
      align="center"
      justify="center"
      gap="2"
    >
      <Stack
        justify="space-between"
        direction="row"
        align="center"
        justifyContent="center"
      >
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            size="lg"
            href="#"
            target="_blank"
            _hover={{}}
            aria-label="LinkedIn"
            color="white"
            icon={<FaLinkedin fontSize="2.25rem" />}
          />
          <IconButton
            as="a"
            size="lg"
            href="https://github.com/victorrdias"
            target="_blank"
            _hover={{}}
            aria-label="GitHub"
            color="white"
            icon={<FaGithub fontSize="2.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Flex
        direction="column"
        gap="2"
        align={{ base: "flex-start", md: "center", lg: "center" }}
      >
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Vitor Dias. Todos os direitos
          reservados.
        </Text>
      </Flex>
    </Flex>
  );
};
export default Footer;
