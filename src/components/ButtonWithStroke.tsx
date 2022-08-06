import { FC, useState, useEffect, useRef } from "react";
import {
  Button,
  useMultiStyleConfig,
  chakra,
  CSSObject,
  ButtonProps,
  Box
} from "@chakra-ui/react";

interface SVGPros {
  width: number;
  height: number;
  radius: number;
  styles: CSSObject;
  setIsAnimating: (isAnimating: boolean) => void;
}

const svgXmlns = "http://www.w3.org/2000/svg";

export const Stroke: FC<SVGPros> = ({
  width,
  height,
  radius,
  styles,
  setIsAnimating
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const viewBox = `0 0 ${width} ${height}`;

  useEffect(() => {
    svgRef?.current?.addEventListener("animationend", () =>
      setIsAnimating(false)
    );
  }, [setIsAnimating, styles]);

  return (
    <chakra.svg ref={svgRef} __css={styles} viewBox={viewBox} xmlns={svgXmlns}>
      <rect
        xmlns={svgXmlns}
        x="0"
        y="0"
        width={width}
        height={height}
        rx={radius}
        ry={radius}
        pathLength="10"
      />
    </chakra.svg>
  );
};

export const ButtonWithStroke: FC<ButtonProps> = ({ children, ...props }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const styles = useMultiStyleConfig("ShinyButton", {
    isAnimating
  });

  useEffect(() => {
    buttonRef?.current?.addEventListener("pointerenter", () =>
      setIsAnimating(true)
    );
  }, []);

  return (
    <Button ref={buttonRef} {...props}>
      {children}
      {!props.disabled && buttonRef?.current && (
        <Box __css={styles.container}>
          {[1, 2].map((number) => (
            <Box
              __css={styles.linesGroup}
              key={number}
              _last={{ transform: "rotate(180deg)" }}
            >
              {[1, 2, 3, 4].map((number, index) => (
                <Stroke
                  styles={{
                    ...styles.svgLine,
                    ...styles[`svgLine${index + 1}`]
                  }}
                  key={number}
                  width={Number((buttonRef?.current?.offsetWidth || 0) + 5)}
                  height={Number(buttonRef?.current?.offsetHeight)}
                  radius={Number(
                    // @ts-ignore
                    getComputedStyle(buttonRef.current).borderRadius.slice(
                      0,
                      -2
                    )
                  )}
                  setIsAnimating={setIsAnimating}
                />
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Button>
  );
};
