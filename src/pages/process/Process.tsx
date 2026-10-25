import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { ContactSection } from '@/components/contact-section/ContactSection';
import { Container } from '@/components/container/Container';
import { PageIntro } from '@/components/page-intro/PageIntro';
import { processSteps } from './steps';

const values = [
  [
    'Clear',
    'You always know what we are working on, what it will cost and when it will be ready.',
  ],
  [
    'Practical',
    'We automate the steps that pay off, not everything that could be automated.',
  ],
  [
    'Careful',
    'Your documents and client data are handled with the care a legal or financial team expects.',
  ],
  [
    'Yours',
    'You own the code and the infrastructure. Nothing is locked to us.',
  ],
];

export default function Process() {
  return (
    <>
      <PageIntro title="How we work">
        <p>
          Every project follows the same four steps, whether it is a single
          automation or a full product. You see working software early, and
          nothing launches until it has been tested against real cases from your
          business.
        </p>
      </PageIntro>

      <Container sx={{ mt: { base: 12, md: 20 } }}>
        <Box as="ol" listStyleType="none" m={0}>
          {processSteps.map((step, i) => (
            <Grid
              as="li"
              key={step.title}
              templateColumns={{ base: '1fr', md: '1fr 2fr' }}
              gap={{ base: 4, md: 16 }}
              py={{ base: 10, md: 14 }}
              borderTop="1px solid"
              borderColor="rule"
            >
              <Box>
                <Text fontSize="sm" color="signature.600" fontWeight={600}>
                  Step {i + 1}
                </Text>
                <Heading as="h2" mt={1} fontSize={{ base: '2xl', md: '3xl' }}>
                  {step.title}
                </Heading>
              </Box>
              <Box>
                <Box
                  color="ink.700"
                  maxW="62ch"
                  sx={{ '& > p + p': { mt: 4 } }}
                >
                  {step.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </Box>
                <Flex
                  as="ul"
                  listStyleType="none"
                  m={0}
                  mt={6}
                  wrap="wrap"
                  gap={2}
                >
                  {step.included.map((item) => (
                    <Box
                      as="li"
                      key={item}
                      px={3}
                      py={1}
                      fontSize="sm"
                      bg="sheet"
                      borderRadius="full"
                      color="ink.700"
                    >
                      {item}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Grid>
          ))}
        </Box>
      </Container>

      <Box bg="sheet" mt={{ base: 12, md: 20 }} py={{ base: 16, md: 24 }}>
        <Container>
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }}>
            What you can expect from us
          </Heading>
          <Grid
            mt={10}
            templateColumns={{
              base: '1fr',
              sm: '1fr 1fr',
              lg: 'repeat(4, 1fr)',
            }}
            gap={8}
          >
            {values.map(([title, body]) => (
              <Box
                key={title}
                borderTop="2px solid"
                borderColor="ink.900"
                pt={4}
              >
                <Text fontWeight={600} fontSize="lg">
                  {title}
                </Text>
                <Text mt={2} color="ink.500" fontSize="sm">
                  {body}
                </Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      <ContactSection />
    </>
  );
}
