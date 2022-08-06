import { FC } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex
} from "@chakra-ui/react";
import { Topic } from "src/components/Topic";
import { topics } from "src/mocks";

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
      <Tabs colorScheme="teal" w="full" zIndex={1} bg="primary" opacity={0.9}>
        <TabList w="full" justifyContent="space-between">
          {topics.map(({ id, name }) => (
            <Tab key={id} w="full">
              {name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {topics.map((topic) => (
            <TabPanel>
              <Topic key={topic.id} {...topic} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
