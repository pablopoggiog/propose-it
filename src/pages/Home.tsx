import { FC } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Topic } from "src/components/Topic";
import { topics } from "src/mocks";

const bounce = keyframes`
  from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
    `;

const AnimatedSpline = styled(Spline)`
  animation: ${bounce} 3s ease-in-out;
`;

const CanvasContainer = styled(Flex)`
  canvas {
    width: 100vw !important;
    height: auto !important;
  }
`;

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
      <CanvasContainer
        w="full"
        pos="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        zIndex={0}
        opacity={0.5}
      >
        <AnimatedSpline scene="https://prod.spline.design/qzyFOMbsVr6Wj3E9/scene.splinecode" />
      </CanvasContainer>
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
            <TabPanel key={topic.id}>
              <Topic {...topic} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
