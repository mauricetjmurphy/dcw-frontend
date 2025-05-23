import React from "react";
import { As, Box, SystemStyleObject } from "@chakra-ui/react";

interface ContainerProps {
  as?: As;
  sx?: SystemStyleObject;
  children: React.ReactNode;
}

export function Container({ as, sx, children }: ContainerProps) {
  return (
    <Box
      as={as}
      sx={{
        mx: "auto",
        maxW: "7xl",
        px: { base: 6, lg: 8 },
        ...sx,
      }}
    >
      <Box
        sx={{
          mx: "auto",
          maxW: { base: "2xl", lg: "none" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
