import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import { Container } from '../container/Container';
import { FadeIn } from '../fade-in/FadeIn';

export function SectionIntro({
  title,
  eyebrow,
  children,
  invert = false,
  ...sx
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  smaller?: boolean;
  invert?: boolean;
}) {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Container {...sx}>
      <FadeIn style={{ maxWidth: '672px' }}>
        <Text as={'h2'}>
          {eyebrow && (
            <>
              <Box
                as={'span'}
                sx={{
                  mb: 6,
                  display: 'block',
                  fontFamily: "'Mona Sans', sans-serif",
                  fontSize: 'base',
                  fontWeight: 'semibold',
                  color: invert ? 'white' : 'neutral.950',
                }}
              >
                {eyebrow}
              </Box>
            </>
          )}
          <Box
            as={'span'}
            sx={{
              textWrap: 'balance',
              display: 'block',
              fontFamily: "'Mona Sans', sans-serif",
              letterSpacing: '-0.015em',
              overflowWrap: 'balance',
              fontSize: isLargerThan600 ? '64px' : '36px',
              fontWeight: 'bold',
              color: invert ? 'white' : 'neutral.950',
              lineHeight: isLargerThan600 ? '68px' : '44px',
            }}
          >
            {title}
          </Box>
        </Text>
        {children && (
          <Box
            sx={{
              textWrap: 'balance',
              mt: 6,
              fontSize: 'xl',
              color: invert ? 'white' : 'neutral.600',
            }}
          >
            {children}
          </Box>
        )}
      </FadeIn>
    </Container>
  );
}
