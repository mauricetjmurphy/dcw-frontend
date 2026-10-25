import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Container } from '../container/Container';

export function ContactSection() {
  return (
    <Container sx={{ mt: { base: 20, md: 32 } }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ md: 'center' }}
        justify="space-between"
        gap={8}
        bg="signature.500"
        color="white"
        borderRadius="panel"
        px={{ base: 6, md: 14 }}
        py={{ base: 10, md: 14 }}
      >
        <Box maxW="34rem">
          <Heading as="h2" color="white" fontSize={{ base: '2xl', md: '3xl' }}>
            Tell us about the process that eats your week
          </Heading>
          <Text mt={4} color="signature.100" fontSize="lg">
            A 30-minute call is enough to tell you whether it can be automated,
            and roughly what it would take.
          </Text>
        </Box>
        <Button
          as={Link}
          to="/contact"
          size="lg"
          variant="secondary"
          borderColor="transparent"
          flexShrink={0}
          alignSelf={{ base: 'flex-start', md: 'center' }}
        >
          Book a scoping call
        </Button>
      </Flex>
    </Container>
  );
}
