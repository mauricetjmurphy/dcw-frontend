import { Box, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FadeIn } from '../fade-in/FadeIn';
import { Container } from '../container/Container';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
  centered?: boolean;
}

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: PageIntroProps) {
  return (
    <Container
      sx={{
        pt: { base: 24, sm: 32, lg: 40 },
        textAlign: centered ? 'center' : 'left',
      }}
    >
      <FadeIn>
        <Box as="header">
          <Text
            display="block"
            fontFamily="'Mona Sans', sans-serif"
            fontSize="base"
            fontWeight="semibold"
            color="neutral.950"
          >
            {eyebrow}
          </Text>

          <Heading
            mt={6}
            maxW="5xl"
            mx={centered ? 'auto' : '0px'}
            fontSize={{ base: '5xl', sm: '6xl' }}
            fontWeight="medium"
            color="neutral.950"
            letterSpacing="tight"
            sx={{ textWrap: 'balance' }}
          >
            {title}
          </Heading>
        </Box>

        <Box
          mt={6}
          maxW="3xl"
          mx={centered ? 'auto' : '0'} // Centering conditionally
          fontSize="xl"
          color="neutral.600"
        >
          {children}
        </Box>
      </FadeIn>
    </Container>
  );
}
