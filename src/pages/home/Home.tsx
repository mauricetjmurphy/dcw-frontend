import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IconCheck } from '@tabler/icons-react';
import { Container } from '@/components/container/Container';
import { ContactSection } from '@/components/contact-section/ContactSection';
import { RunLog } from '@/components/run-log/RunLog';
import { processSteps } from '@/pages/process/steps';

import diyLogo from '@/assets/images/diy-logo.png';

const technologies = [
  'Python',
  'FastAPI',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'MySQL',
  'AWS',
  'Docker',
  'Terraform',
  'GitHub Actions',
];

const offerings = [
  {
    title: 'Automations',
    lead: 'We connect the tools you already pay for so information moves on its own, instead of being retyped by someone on your team.',
    examples: [
      'Intake forms that fill in your documents and contracts',
      'Invoices, reminders and follow-ups sent on schedule',
      'Reports pulled together overnight from several systems',
      'Emails sorted and routed to the right person',
    ],
  },
  {
    title: 'Custom micro SaaS',
    lead: 'When no off-the-shelf tool fits, we build a small web app around one job your business does every day. You own it.',
    examples: [
      'Client portals for uploading files and tracking progress',
      'Internal tools that replace a fragile spreadsheet',
      'Quoting, booking and scheduling apps',
      'A niche product you can sell to others in your industry',
    ],
  },
];

const assurances = [
  {
    title: 'Hosted on AWS',
    body: 'Everything we build runs on Amazon Web Services, set up so it scales and stays secure.',
  },
  {
    title: 'Tested before it ships',
    body: 'Each workflow is tested against real cases from your business before anyone relies on it.',
  },
  {
    title: 'You see progress',
    body: 'Regular demos of working software, not status reports, so you can steer while we build.',
  },
  {
    title: 'Supported after launch',
    body: 'We stay on for fixes, updates and the next process you want to automate.',
  },
];

function Hero() {
  return (
    <Container sx={{ pt: { base: 12, md: 20 }, pb: { base: 16, md: 24 } }}>
      <Grid
        templateColumns={{ base: '1fr', xl: 'minmax(0, 1fr) minmax(0, 1.1fr)' }}
        gap={{ base: 12, xl: 16 }}
        alignItems="center"
      >
        <Box>
          <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} maxW="14ch">
            Turn manual work into software you own
          </Heading>
          <Text
            mt={6}
            fontSize={{ base: 'md', md: 'lg' }}
            color="ink.700"
            maxW="34rem"
          >
            Documated builds automations and small custom software products for
            businesses that still run on spreadsheets, inboxes and copy-paste.
            You tell us the process. We ship the tool.
          </Text>
          <Flex mt={9} gap={3} wrap="wrap">
            <Button as={Link} to="/contact" size="lg">
              Book a scoping call
            </Button>
            <Button as={Link} to="/process" size="lg" variant="secondary">
              See how we work
            </Button>
          </Flex>
        </Box>
        <Box>
          <RunLog />
          <Text mt={3} fontSize="sm" color="ink.500">
            A simplified version of an automation we built for a family-law
            practice.
          </Text>
        </Box>
      </Grid>
    </Container>
  );
}

function Services() {
  return (
    <Box
      as="section"
      id="services"
      bg="sheet"
      py={{ base: 16, md: 24 }}
      scrollMarginTop="68px"
    >
      <Container>
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} maxW="20ch">
          Two ways we take work off your plate
        </Heading>
        <Grid
          mt={{ base: 10, md: 14 }}
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          border="1px solid"
          borderColor="rule"
          borderRadius="panel"
          bg="paper"
          overflow="hidden"
        >
          {offerings.map((offering, i) => (
            <Box
              key={offering.title}
              p={{ base: 6, md: 10 }}
              borderTopWidth={{ base: i ? '1px' : 0, md: 0 }}
              borderLeftWidth={{ base: 0, md: i ? '1px' : 0 }}
              borderColor="rule"
            >
              <Heading as="h3" fontSize="xl">
                {offering.title}
              </Heading>
              <Text mt={3} color="ink.700" maxW="32rem">
                {offering.lead}
              </Text>
              <List mt={6} spacing={3}>
                {offering.examples.map((example) => (
                  <ListItem key={example} display="flex" gap={3}>
                    <Box
                      as={IconCheck}
                      size={18}
                      flexShrink={0}
                      mt="4px"
                      color="signature.500"
                    />
                    {example}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Grid>

        <Grid
          mt={{ base: 12, md: 16 }}
          templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
          gap={8}
        >
          {assurances.map((item) => (
            <Box key={item.title}>
              <Text fontWeight={600}>{item.title}</Text>
              <Text mt={2} color="ink.500" fontSize="sm">
                {item.body}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Work() {
  return (
    <Container as="section" sx={{ py: { base: 16, md: 24 } }}>
      <Box id="work" scrollMarginTop="100px" />
      <Grid
        templateColumns={{ base: '1fr', lg: '5fr 7fr' }}
        gap={{ base: 8, lg: 16 }}
      >
        <Box>
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }}>
            Recent work
          </Heading>
          <Box mt={8}>
            <img src={diyLogo} alt="DIY Divorce Solutions" width={240} />
          </Box>
          <Heading as="h3" mt={6} fontSize="xl">
            Contracts drafted from a client form, ready to sign
          </Heading>
          <Text mt={3} color="ink.700">
            DIY Divorce Solutions was preparing legal documents by hand. We
            replaced that workflow with a system where clients submit their
            details once, the data is stored securely, and accurate,
            ready-to-sign agreements are generated automatically.
          </Text>
          <Text mt={4} fontSize="sm" color="ink.500">
            Web application and document automation, 2024
          </Text>
        </Box>

        <Box
          as="figure"
          m={0}
          bg="sheet"
          borderRadius="panel"
          p={{ base: 6, md: 10 }}
          alignSelf="start"
        >
          <Text
            as="blockquote"
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight={1.45}
            fontWeight={500}
            letterSpacing="-0.01em"
          >
            “Working with Documated transformed our document automation process.
            Tasks that once took hours are now completed in minutes, with
            improved accuracy and minimal human error. The team's expertise and
            support made the transition seamless, and we've seen a significant
            boost in productivity.”
          </Text>
          <Text as="figcaption" mt={6} color="ink.500">
            DIY Divorce Solutions
          </Text>
        </Box>
      </Grid>
    </Container>
  );
}

function ProcessSummary() {
  return (
    <Box as="section" borderTop="1px solid" borderColor="rule">
      <Container sx={{ py: { base: 16, md: 24 } }}>
        <Flex
          justify="space-between"
          align={{ md: 'end' }}
          direction={{ base: 'column', md: 'row' }}
          gap={6}
        >
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} maxW="18ch">
            From first call to running software
          </Heading>
          <Button as={Link} to="/process" variant="secondary">
            Read about our process
          </Button>
        </Flex>
        <Grid
          as="ol"
          listStyleType="none"
          m={0}
          mt={{ base: 10, md: 14 }}
          templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
          gap={8}
        >
          {processSteps.map((step, i) => (
            <Box
              as="li"
              key={step.title}
              borderTop="2px solid"
              borderColor={i === 0 ? 'signature.500' : 'rule'}
              pt={5}
            >
              <Text fontSize="sm" color="ink.500" fontWeight={600}>
                Step {i + 1}
              </Text>
              <Text mt={1} fontWeight={600} fontSize="lg">
                {step.title}
              </Text>
              <Text mt={2} color="ink.500" fontSize="sm">
                {step.summary}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Stack() {
  return (
    <Container as="section" sx={{ pt: { base: 4, md: 8 } }}>
      <Text fontSize="sm" color="ink.500">
        Built with proven, mainstream tools, so your software is never tied to
        us
      </Text>
      <Flex mt={5} wrap="wrap" columnGap={8} rowGap={4}>
        {technologies.map((name) => (
          <Text key={name} color="ink.700" fontWeight={500}>
            {name}
          </Text>
        ))}
      </Flex>
    </Container>
  );
}

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <ProcessSummary />
      <Stack />
      <ContactSection />
    </>
  );
};

export default HomePage;
