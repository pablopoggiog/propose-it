import {
  HStack,
  Image,
  Button,
  MenuButton,
  Menu,
  MenuList
} from "@chakra-ui/react";
import AnimatedLogo from "src/assets/animated-logo.gif";

export const Header = () => {
  const hardcodedWallet = "0x0000000000000000000000000000000000000000";

  return (
    <HStack h={20} w="full" justify="space-between" p={5}>
      <Image w={20} src={AnimatedLogo} />

      {!hardcodedWallet ? (
        <Menu>
          <MenuButton as={Button}>0xwallet...address</MenuButton>

          <MenuList p={0}>
            <Button w="full" py={5}>
              Log out
            </Button>
          </MenuList>
        </Menu>
      ) : (
        <Button>Connect Wallet</Button>
      )}
    </HStack>
  );
};
