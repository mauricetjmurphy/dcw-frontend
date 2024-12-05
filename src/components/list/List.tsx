import { Box, Text, SystemStyleObject, Grid, GridItem } from '@chakra-ui/react';
import { FadeIn, FadeInStagger } from '../fade-in/FadeIn';
import { Border } from '../border/Border';

export function GridList({
  children,
  templateRows,
  templateColumns,
  columnGap,
  rowGap,
  sx,
}: {
  children: React.ReactNode;
  sx?: SystemStyleObject;
  templateRows: string;
  templateColumns: string;
  columnGap?: number;
  rowGap?: number;
}) {
  return (
    <FadeInStagger>
      <Grid
        templateRows={templateRows}
        templateColumns={templateColumns}
        columnGap={columnGap}
        rowGap={rowGap}
        sx={{ fontSize: 'base', color: 'neutral.600', ...sx }}
      >
        {children}
      </Grid>
    </FadeInStagger>
  );
}

export function GridListItem({
  children,
  title,
  invert = false,
  borderPosition = 'top',
}: {
  children: React.ReactNode;
  title?: string;
  invert?: boolean;
  borderPosition?: 'left' | 'top';
}) {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      height="100%"
      px={borderPosition === 'left' ? 4 : 0}
    >
      <FadeIn>
        <Box
          display="flex"
          flexDirection={borderPosition === 'left' ? 'row' : 'column'}
          height="100%"
        >
          <Border
            sx={borderPosition === 'top' && { py: '16px' }}
            position={borderPosition || 'top'}
          />
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              sx={
                borderPosition === 'top'
                  ? { p: '16px 0px 8px 0px' }
                  : { p: '0px' }
              }
            >
              {title && (
                <Text
                  as="strong"
                  sx={{
                    pb: '8px',
                    fontWeight: '600',
                    color: invert ? 'white' : '#000',
                    display: 'block',
                  }}
                >
                  {title}
                </Text>
              )}
            </Box>

            <Box flex={1}>
              <Box sx={{ color: 'gray' }}>{children}</Box>
            </Box>
          </Box>
        </Box>
      </FadeIn>
    </GridItem>
  );
}
