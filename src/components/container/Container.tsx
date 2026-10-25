import React from 'react';
import { As, Box, SystemStyleObject } from '@chakra-ui/react';

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
        mx: 'auto',
        maxW: '76rem',
        px: { base: 5, md: 8 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
