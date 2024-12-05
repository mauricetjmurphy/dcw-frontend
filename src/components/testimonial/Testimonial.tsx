import { Box, SystemStyleObject, Text, useMediaQuery } from '@chakra-ui/react';
import { Container } from '../container/Container';
import { FadeIn } from '../fade-in/FadeIn';

export function Testimonial({
  children,
  client,
  sx,
}: {
  children: React.ReactNode;
  client: { logo: string; name: string };
  sx?: SystemStyleObject;
}) {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      sx={{
        position: 'relative',
        isolation: 'isolate',
        bg: '#fafafa',
        py: { base: 16, sm: 28, md: 16 },
        ...sx,
      }}
    >
      <Container>
        <FadeIn>
          <Box
            as={'figure'}
            sx={{
              mx: 'auto',
              maxW: '5xl',
            }}
          >
            <Box
              as={'blockquote'}
              sx={{
                position: 'relative',
                fontFamily: "'Mono Sans', sans-serif",
                fontWeight: 'Normal',
                color: 'neutral.950',
              }}
            >
              <Text
                sx={{
                  fontSize: isLargerThan600 ? '26px' : '20px',
                  position: 'relative',
                  _before: {
                    content: `"“"`,
                    position: { sm: 'absolute' },
                    right: { sm: '100%' },
                  },
                  _after: {
                    content: `"”"`,
                  },
                }}
              >
                {children}
              </Text>
            </Box>
            <Box as="figcaption" sx={{ mt: 10 }}>
              <img
                style={{ width: '350px' }}
                src={client.logo}
                alt={client.name}
              />
            </Box>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
