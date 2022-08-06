import { keyframes } from "@emotion/react";
import { extendTheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        bg: "teal.400",
        color: "white",
        _hover: {
          filter: "brightness(1.01)"
        }
      },
      defaultProps: {
        size: "sm",
        variant: ""
      }
    }
  }
});
