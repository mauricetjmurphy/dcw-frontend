import { ContactSection } from '@/components/contact-section/ContactSection';
import { Container } from '@/components/container/Container';
import { FadeIn, FadeInStagger } from '@/components/fade-in/FadeIn';
import { GridList, GridListItem } from '@/components/list/List';
import { PageIntro } from '@/components/page-intro/PageIntro';
import { SectionIntro } from '@/components/section-intro/SectionIntro';
import { Box, Text, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import imageMauriceMurphy from '@/assets/images/maurice_murphy.jpg';
import { StatList, StatListItem } from '@/components/stat-list/StatList';

function Culture() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      sx={{
        mt: '160px',
        borderRadius: '32px',
        backgroundColor: '#000',
        py: '128px',
      }}
    >
      <SectionIntro
        eyebrow="Our culture"
        title="A Culture Built on Innovation and Collaboration"
        invert
      >
        <Text>
          At the heart of our company is a culture of continuous improvement,
          driven by a passion for automating the complex and simplifying the
          everyday. Our team thrives on solving challenges together, creating a
          dynamic environment where collaboration and innovation lead the way.
        </Text>
      </SectionIntro>
      <Container sx={{ mt: 16 }}>
        <GridList
          templateColumns={isLargerThan600 ? '1fr 1fr 1fr' : '1fr'}
          templateRows={isLargerThan600 ? '1fr' : 'repeat(3, 1fr)'}
        >
          <GridListItem
            title="Empowerment through Innovation"
            invert
            borderPosition={isLargerThan600 ? 'left' : 'top'}
          >
            <Text color={'gray.400'}>
              We encourage every team member to think outside the box,
              experiment with new technologies, and contribute to innovative
              solutions that push the boundaries of automation.
            </Text>
          </GridListItem>
          <GridListItem
            title="Collaboration at Our Core"
            invert
            borderPosition={isLargerThan600 ? 'left' : 'top'}
          >
            <Text color={'gray.400'}>
              We believe that great ideas come from collaboration. Our team
              works closely with one another—and with our clients—to create
              solutions that truly meet their needs and transform their
              operations.
            </Text>
          </GridListItem>
          <GridListItem
            title="Commitment to Growth"
            invert
            borderPosition={isLargerThan600 ? 'left' : 'top'}
          >
            <Text color={'gray.400'}>
              Whether it's personal development or helping our clients grow,
              we're committed to fostering an environment where learning and
              improvement are a constant, ensuring we stay at the forefront of
              the automation industry.
            </Text>
          </GridListItem>
        </GridList>
      </Container>
    </Box>
  );
}

const team = [
  //   {
  //     title: "Leadership",
  //     people: [
  //       {
  //         name: "Maurice Murphy",
  //         role: "Co-Founder / CEO",
  //         image: { src: imageMauriceMurphy },
  //       },
  //     ],
  //   },
  {
    title: 'Team',
    people: [
      {
        name: 'Maurice Murphy',
        role: 'Founder / Developer',
        image: { src: imageMauriceMurphy },
      },
    ],
  },
];

function Team() {
  return (
    <Container
      sx={{
        mt: { xs: 24, sm: 32, lg: 40 },
      }}
    >
      <Box
        sx={{
          '& > :not(style) + :not(style)': {
            mt: 24,
          },
        }}
      >
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <FadeIn>
              <Box>
                <Grid
                  templateColumns={{ base: '1fr', lg: '1fr 3fr' }}
                  gap={{ base: 6, xl: 8 }}
                  pt={{ base: 12, sm: 16 }}
                >
                  <FadeIn>
                    <Text
                      fontSize="2xl"
                      fontWeight="semibold"
                      color="neutral.950"
                    >
                      {group.title}
                    </Text>
                  </FadeIn>
                  <Grid
                    templateColumns={{
                      base: '1fr',
                      sm: '1fr 1fr',
                      lg: 'repeat(3, 1fr)',
                    }}
                    gap={{ base: 6, xl: 8 }}
                  >
                    {group.people.map((person) => (
                      <GridItem key={person.name}>
                        <FadeIn>
                          <Box
                            className="group"
                            position="relative"
                            overflow="hidden"
                            borderRadius="3xl"
                            bg="neutral.100"
                          >
                            <img
                              alt=""
                              {...person.image}
                              style={{
                                height: '24rem',
                                width: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(100%)',
                                transition: 'transform 0.5s',
                              }}
                              className="motion-safe:group-hover:scale-105"
                            />
                            <Box
                              position="absolute"
                              inset={0}
                              display="flex"
                              flexDirection="column"
                              justifyContent="flex-end"
                              bgGradient="linear(to-t, black, rgba(0, 0, 0, 0) 40%)"
                              p={6}
                            >
                              <Text
                                fontSize="base"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                color="white"
                              >
                                {person.name}
                              </Text>
                              <Text mt={2} fontSize="sm" color="white">
                                {person.role}
                              </Text>
                            </Box>
                          </Box>
                        </FadeIn>
                      </GridItem>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </FadeIn>
          </FadeInStagger>
        ))}
      </Box>
    </Container>
  );
}

export default function About() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="Empowering Businesses Through Smart Automation"
      >
        <Text pb={'16px'} fontSize={isLargerThan600 ? '' : '1rem'}>
          Encouraged by the growing demand for efficiency, we started our
          company with a simple goal: to help businesses automate the routine
          tasks that drain time and resources. Whether it’s a small business
          trying to scale or a large enterprise managing complex operations, we
          saw the critical need for automation to keep pace in today’s rapidly
          evolving digital landscape.
        </Text>
        <Box>
          <Text pb={'16px'} fontSize={isLargerThan600 ? '' : '1rem'}>
            We believe that automation is key to unlocking a business’s full
            potential. Our team is driven by a commitment to innovation,
            precision, and collaboration. By simplifying the complex, we empower
            businesses to focus on growth, strategy, and the things that truly
            matter.
          </Text>
          <Text fontSize={isLargerThan600 ? '' : '1rem'}>
            With every project, we bring a deep understanding of the unique
            challenges our clients face. We tailor our automation solutions to
            not only meet immediate needs but to future-proof operations for
            sustained success. Our goal is to be more than a service provider—we
            strive to be a long-term partner in driving efficiency, innovation,
            and competitive advantage.
          </Text>
        </Box>
      </PageIntro>
      <Container sx={{ mt: 16 }}>
        <StatList>
          <StatListItem value="500+" label="Automated Processes Delivered" />
          <StatListItem
            value="98%"
            label="Client Satisfaction Rate Across All Projects"
          />
          <StatListItem
            value="10+"
            label="Years of Experience in Automation and Digital Solutions"
          />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <ContactSection />
    </>
  );
}
