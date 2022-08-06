import { FC } from "react";
import { Flex } from "@chakra-ui/react";

export const HomePage: FC = () => {
  return (
    <Flex
      h="100vh"
      direction="column"
      align="center"
      p={5}
      w="full"
      pos="relative"
      bg="#f0acfc"
    >
      Homepage
    </Flex>
  );
};
