import { FC } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

export interface Props {
  name: string;
  id: number;
  description: string;
}

export const Proposal: FC<Props> = ({ name, id, description }) => (
  <AccordionItem border={0}>
    <h2>
      <AccordionButton
        rounded="md"
        bg="teal.300"
        _hover={{ bg: "teal.400", color: "white" }}
        _expanded={{ bg: "teal.500", color: "white" }}
      >
        <Box flex="1" textAlign="left">
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel rounded="md" bg="purple.100" pb={4}>
      {description}
    </AccordionPanel>
  </AccordionItem>
);
