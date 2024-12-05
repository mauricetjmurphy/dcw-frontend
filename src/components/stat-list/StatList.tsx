import { Box, Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react';
import { Border } from '../border/Border';
import { FadeIn, FadeInStagger } from '../fade-in/FadeIn';

export function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode;
}) {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <FadeInStagger {...props}>
      <Grid
        templateColumns={isLargerThan600 ? 'repeat(3, 1fr)' : '1fr'}
        templateRows={'1fr'}
        gap={8}
        justifyContent="space-between"
        alignItems="stretch"
      >
        {children}
      </Grid>
    </FadeInStagger>
  );
}

export function StatListItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <GridItem>
      <FadeIn
        style={{
          display: 'flex',
          paddingLeft: '8px',
          height: '100%',
        }}
      >
        <Border position={'left'} invert />
        <Box>
          <Text
            sx={{
              fontSize: { base: '3xl', sm: '4xl' },
              fontWeight: 'semibold',
              color: 'neutral.950',
            }}
          >
            {value}
          </Text>
          <Text
            sx={{
              mt: 2,
              fontSize: 'base',
              color: 'neutral.600',
            }}
          >
            {label}
          </Text>
        </Box>
      </FadeIn>
    </GridItem>
  );
}
