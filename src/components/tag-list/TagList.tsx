import { List, ListItem, SystemStyleObject } from '@chakra-ui/react';

export function TagList({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SystemStyleObject;
}) {
  return (
    <List role="list" sx={{ display: 'flex', flexWrap: 'wrap', ...sx }}>
      {children}
    </List>
  );
}

export function TagListItem({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SystemStyleObject;
}) {
  return (
    <ListItem
      borderRadius="full"
      bg="#ececec"
      px={4}
      py={1.5}
      mb={2}
      mx={1}
      fontSize="14px"
      color="neutral.600"
      sx={{ ...sx }}
    >
      {children}
    </ListItem>
  );
}
