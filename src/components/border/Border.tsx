import { Box, Divider } from "@chakra-ui/react";

type BorderProps<T extends React.ElementType> = {
  as?: T;
  sx?: any;
  position?: "top" | "left";
  invert?: boolean;
};

export function Border<T extends React.ElementType = "div">({
  as,
  sx,
  position = "top",
  invert = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>) {
  const Component = as ?? "div";

  const baseDividerProps = {
    borderWidth: "1px",
    borderColor: "gray.500",
  };

  // Helper function to render dividers based on position
  const renderDividers = () => {
    if (position === "top") {
      return (
        <>
          <Divider flex={1} {...baseDividerProps} />
          <Divider
            flex={16}
            ml={2}
            width="100%"
            borderColor={"gray.300"}
            borderWidth="1px"
          />
        </>
      );
    }
    if (position === "left") {
      return (
        <>
          <Divider orientation="vertical" flex={1} {...baseDividerProps} />
          <Divider
            orientation="vertical"
            flex={3}
            mt={2}
            height="100%"
            borderColor={"gray.300"}
            borderWidth="1px"
          />
        </>
      );
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={position === "left" ? "column" : "row"}
      width={position === "left" ? "0px" : "100%"}
      height="100%"
      pr={position === "left" ? "40px" : "0px"}
      as={Component}
      sx={sx}
      {...props}
    >
      {renderDividers()}
    </Box>
  );
}
