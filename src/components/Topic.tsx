import { FC } from "react";
import { Accordion } from "@chakra-ui/react";
import { Props as IProposal, Proposal } from "src/components/Proposal";

interface Props {
  name: string;
  proposals: IProposal[];
}

export const Topic: FC<Props> = ({ name, proposals }) => (
  <Accordion
    colorScheme="teal"
    allowMultiple
    display="flex"
    flexDirection="column"
    gap={4}
  >
    {proposals.map((proposal) => (
      <Proposal key={proposal.id} {...proposal} />
    ))}
  </Accordion>
);
