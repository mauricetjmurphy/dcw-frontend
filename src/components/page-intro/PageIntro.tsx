import { Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Container } from '../container/Container';

interface PageIntroProps {
  title: string;
  children: ReactNode;
}

export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <Container as="header" sx={{ pt: { base: 14, md: 24 } }}>
      <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} maxW="18ch">
        {title}
      </Heading>
      <Text
        as="div"
        mt={6}
        fontSize={{ base: 'md', md: 'lg' }}
        color="ink.700"
        maxW="60ch"
        sx={{ '& > p + p': { mt: 4 } }}
      >
        {children}
      </Text>
    </Container>
  );
}
