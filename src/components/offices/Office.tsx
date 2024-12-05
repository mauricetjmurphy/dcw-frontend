import { Box, SystemStyleObject, Text } from '@chakra-ui/react';

interface OfficeProps {
  invert?: boolean;
  title?: boolean;
  sx?: SystemStyleObject;
}

export function Office({ invert = false, title = true, sx }: OfficeProps) {
  return (
    <Box
      as="address"
      fontStyle={'normal'}
      color={invert ? '#fff' : '#000'}
      sx={{ ...sx }}
    >
      {title && (
        <Text fontSize="16px" fontWeight={'bold'} pb={'24px'}>
          Our Office
        </Text>
      )}

      <Text fontSize="14px" fontWeight={'bold'} pb={'4px'}>
        Dublin
      </Text>
      <Text fontSize="14px">77 Sir John Rogerson's Quay,</Text>
      <Text fontSize="14px">Grand Canal Dock, Dublin, D02 NP08, Ireland</Text>
    </Box>
  );
}
