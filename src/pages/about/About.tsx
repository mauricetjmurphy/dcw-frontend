import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { ContactSection } from '@/components/contact-section/ContactSection';
import { Container } from '@/components/container/Container';
import { PageIntro } from '@/components/page-intro/PageIntro';
import imageMauriceMurphy from '@/assets/images/maurice_murphy.jpg';

const beliefs = [
  {
    title: 'Small tools beat big platforms',
    body: 'A focused app that does one job well is cheaper to run, easier to learn and quicker to change than a platform you only use a tenth of.',
  },
  {
    title: 'The people doing the work know best',
    body: 'We design around the person who does the task every day, not around an org chart. That is why the tools we build actually get used.',
  },
  {
    title: 'Automation should be boring',
    body: 'Good automation runs quietly in the background. We use mainstream, well-tested technology so it keeps running long after launch.',
  },
];

export default function About() {
  return (
    <>
      <PageIntro title="A small studio that builds software for small teams">
        <p>
          Documated started with a simple observation: most businesses are held
          back not by a lack of software, but by the manual work between the
          tools they already have. Retyping forms into documents, copying data
          between systems, chasing the same emails every week.
        </p>
        <p>
          We fix that by building automations and small, focused software
          products around how your business actually works, then hosting and
          supporting them so you never have to think about the plumbing.
        </p>
      </PageIntro>

      <Container sx={{ mt: { base: 16, md: 24 } }}>
        <Grid
          templateColumns={{ base: '1fr', md: '280px 1fr' }}
          gap={{ base: 8, md: 16 }}
          alignItems="center"
        >
          <Box
            as="img"
            src={imageMauriceMurphy}
            alt="Maurice Murphy"
            w="100%"
            maxW="280px"
            aspectRatio="4 / 5"
            objectFit="cover"
            borderRadius="panel"
          />
          <Box maxW="36rem">
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }}>
              You work directly with the person building it
            </Heading>
            <Text mt={4} color="ink.700">
              Documated is run by Maurice Murphy, a software developer based in
              Dublin. There are no account managers or hand-offs: the person you
              explain your process to is the person who designs, builds and
              supports the software.
            </Text>
            <Text mt={4} fontSize="sm" color="ink.500">
              Maurice Murphy, Founder and developer
            </Text>
          </Box>
        </Grid>
      </Container>

      <Box bg="sheet" mt={{ base: 16, md: 24 }} py={{ base: 16, md: 24 }}>
        <Container>
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }}>
            What we believe
          </Heading>
          <Grid
            mt={10}
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={10}
          >
            {beliefs.map((belief) => (
              <Box key={belief.title}>
                <Text fontWeight={600} fontSize="lg">
                  {belief.title}
                </Text>
                <Text mt={2} color="ink.700">
                  {belief.body}
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
