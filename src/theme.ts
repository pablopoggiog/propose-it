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
    },
    ShinyButton: {
      baseStyle: ({ isAnimating }: { isAnimating: boolean; theme: Theme }) => ({
        container: {
          position: "absolute",
          inset: 0,
          mixBlendMode: "hard-light",
          pointerEvents: "none",
          zIndex: 1
        },
        linesGroup: {
          position: "absolute",
          inset: 0
        },
        svgLine: {
          ...(isAnimating && { animation: `${stroke} 1s ease` }),
          display: "block",
          position: "absolute",
          inset: "0",
          overflow: "visible",
          fill: "none",
          strokeWidth: "5",
          stroke: "pink.200",
          width: "full",
          height: "full",
          strokeDasharray: "12 12",
          strokeDashoffset: "12",
          opacity: "0",
          transform: "rotate(-1deg) translate3d(0, 0, 0)"
        },
        svgLine1: {
          stroke: "pink.200"
        },
        svgLine2: {
          strokeWidth: "6px",
          filter: "blur(20px)"
        },
        svgLine3: {
          strokeWidth: "5px",
          filter: "blur(15px)"
        },
        svgLine4: {
          strokeWidth: "10px",
          filter: "blur(56px)"
        }
      })
    }
  }
});

const stroke = keyframes`
  30%,
  55% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 5;
    opacity: 0;
  }
`;
