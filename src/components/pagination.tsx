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
        colorScheme="yellow"
        icon={<ChevronLeftIcon />}
        onClick={onLeftClick}
      />
      <Flex ml="2" mr="2" alignItems="center" color="white">
        {page} de {totalPages}
      </Flex>
      <IconButton
        aria-label="right"
        fontSize="3xl"
        colorScheme="yellow"
        icon={<ChevronRightIcon />}
        onClick={onRightClick}
      />
    </Flex>
  );
};

export default Pagination;
