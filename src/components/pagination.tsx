import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";

export const Pagination: React.FC<{
  page;
  totalPages;
  onLeftClick;
  onRightClick;
}> = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <Flex>
      <IconButton
        aria-label="left"
        fontSize="3xl"
        bgColor="transparent"
        color="white"
        icon={<ChevronLeftIcon />}
        onClick={onLeftClick}
        _hover={{
          bgColor: "#3665ff",
        }}
      />
      <Flex ml="2" mr="2" alignItems="center" color="white">
        {page} de {totalPages}
      </Flex>
      <IconButton
        aria-label="right"
        fontSize="3xl"
        bgColor="transparent"
        color="white"
        _hover={{
          bgColor: "#3665ff",
        }}
        icon={<ChevronRightIcon />}
        onClick={onRightClick}
      />
    </Flex>
  );
};

export default Pagination;
