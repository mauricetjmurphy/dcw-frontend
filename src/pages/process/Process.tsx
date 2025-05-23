import { Blockquote } from '@/components/blockquote/Blockquote';
import { ContactSection } from '@/components/contact-section/ContactSection';
import { Container } from '@/components/container/Container';
import { FadeIn } from '@/components/fade-in/FadeIn';
import { GridList, GridListItem } from '@/components/list/List';
import { PageIntro } from '@/components/page-intro/PageIntro';
import { SectionIntro } from '@/components/section-intro/SectionIntro';
import { StylizedImage } from '@/components/stylized-image/StylizedImage';
import { TagList, TagListItem } from '@/components/tag-list/TagList';
import { Box, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import imageWhiteboard from '@/assets/images/whiteboard.jpg';
import imageLaptop from '@/assets/images/laptop.jpg';
import imageMeeting from '@/assets/images/meeting.jpg';

function Section({
  title,
  image,
  children,
  reverse = false,
  paraNumber,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
  reverse?: boolean;
  paraNumber: string;
}) {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Container sx={{ mt: isLargerThan600 ? '160px' : '80px' }}>
      <Box
        display={{ lg: 'flex' }}
        alignItems={{ lg: 'start' }}
        justifyContent={{ lg: 'space-between' }}
        gap={{ lg: 8, xl: 20 }}
        flexDirection={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }} // Responsive flexDirection
      >
        <Box display="flex" justifyContent="center" flex="1">
          <FadeIn>
            {isLargerThan600 && (
              <StylizedImage
                {...image}
                sx={{
                  width: { base: '33.75rem', lg: '32rem' },
                  justifyContent: 'center',
                }}
              />
            )}
            {!isLargerThan600 && (
              <Box w={'100%'}>
                <img
                  src={image.src}
                  alt="Laptop image"
                  style={{
                    width: '100%',
                    filter: 'grayscale(100%)',
                    borderRadius: '16px',
                  }}
                />
              </Box>
            )}
          </FadeIn>
        </Box>
        {/* Content Box */}
        <Box
          p={isLargerThan600 ? '64px 0px' : '0 0 32px 0'}
          mt={{ base: 12, lg: 0 }}
          width={{ lg: '37rem' }}
          flex="1"
        >
          <FadeIn>
            {/* Display Box with custom before and after pseudo-elements */}
            <HStack>
              <Text
                fontSize="base"
                fontWeight="semibold"
                aria-hidden="true"
                color={'gray.300'}
              >{`/`}</Text>
              <Text
                fontSize="base"
                fontWeight="semibold"
                aria-hidden="true"
              >{`${paraNumber}`}</Text>
            </HStack>

            <Text
              as="h2"
              mt={2}
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight="medium"
              color="neutral.950"
            >
              {title}
            </Text>

            <Box mt={6}>{children}</Box>
          </FadeIn>
        </Box>
      </Box>
    </Container>
  );
}

function Discover() {
  return (
    <Section
      title="Discover"
      image={{ src: imageWhiteboard }}
      paraNumber={'00'}
    >
      <Box color="neutral.600">
        <Text pb={'16px'}>
          Our journey begins with understanding your business, your goals, and
          the challenges you're facing. We dive deep into how your current
          operations work, getting a clear sense of the manual processes that
          are slowing things down or creating inefficiencies.
        </Text>
        <Text pb={'16px'}>
          Through in-depth discussions and analysis, we work closely with your
          team to map out every detail. This phase allows us to identify areas
          where automation can make the biggest impact—whether it's streamlining
          workflows, improving accuracy, or reducing repetitive tasks.
        </Text>
        <Text>
          The goal of the discovery phase is to ensure that we fully understand
          your needs before crafting a solution. By focusing on your unique
          business processes, we set the foundation for an automation strategy
          that is tailored specifically to help you succeed.
        </Text>
      </Box>

      <Text mt={12} fontSize="base" fontWeight="semibold" color="neutral.950">
        Included in this phase
      </Text>

      <TagList sx={{ mt: 4 }}>
        <TagListItem>Business Process Audit</TagListItem>
        <TagListItem>Stakeholder Consultations</TagListItem>
        <TagListItem>Technology Assessment</TagListItem>
        <TagListItem>Process Mapping</TagListItem>
        <TagListItem>Automation Opportunities Report</TagListItem>
        <TagListItem>Preliminary Timeline and Roadmap</TagListItem>
      </TagList>
    </Section>
  );
}

function Build() {
  return (
    <Section
      title="Build"
      image={{ src: imageLaptop }}
      reverse={true}
      paraNumber={'01'}
    >
      {/* Content section with vertical spacing and text styles */}
      <Box color="neutral.600">
        <Text pb={'16px'}>
          After the discovery phase, we move into building your custom
          automation solution. Using the insights gained from our initial
          analysis, we start developing the systems that will streamline your
          processes and eliminate inefficiencies. Our team works with the latest
          technologies and automation frameworks to ensure a solution that is
          both cutting-edge and reliable.
        </Text>
        <Text pb={'16px'}>
          Throughout the build phase, we keep collaboration at the forefront. We
          maintain regular communication with your team to ensure the solution
          aligns with your vision, adjusting where needed to meet your evolving
          requirements. This iterative approach allows us to deliver a tailored
          solution that fits seamlessly into your existing workflows.
        </Text>
        <Text>
          Quality is our top priority during the build phase. We perform
          rigorous testing at each stage to ensure your automation solution is
          robust, secure, and ready for implementation. By the end of this
          phase, you’ll have a fully developed system that is designed to
          optimize your operations and scale with your business.
        </Text>
      </Box>

      {/* Blockquote with margin-top */}
      <Blockquote author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}>
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  );
}

function Deliver() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      <Section title="Deliver" image={{ src: imageMeeting }} paraNumber={'02'}>
        {/* Content section with spacing and text styles */}
        <Box color="neutral.600">
          <Text pb={'16px'}>
            Once the build phase is complete, we transition to delivering your
            automation solution. This involves deploying the system into your
            environment and ensuring a seamless integration with your existing
            processes and tools. Our team works closely with yours to guarantee
            the deployment is smooth and disruption-free.
          </Text>
          <Text pb={'16px'}>
            During the delivery phase, we rigorously test the final solution to
            ensure everything operates as expected. Our delivery process focuses
            on minimizing downtime and maximizing the impact of automation on
            your day-to-day operations. We make sure your team is equipped with
            the necessary knowledge to start leveraging the automation system
            right away.
          </Text>
          <Text>
            Delivery is not the end of our involvement—we’re committed to
            long-term support and scalability. Once the solution is deployed, we
            stay on hand to address any issues, provide training, and ensure the
            system runs optimally. Your success with the new system is our
            priority, and we are always available for ongoing enhancements and
            support.
          </Text>
        </Box>
      </Section>

      <Container>
        <Text
          as="h3"
          mt={12}
          fontSize="base"
          fontWeight="semibold"
          color="neutral.950"
          pb={'32px'}
        >
          Included in this phase
        </Text>
        <GridList
          templateColumns={isLargerThan600 ? 'repeat(3, 1fr)' : '1fr'}
          templateRows="1fr"
          columnGap={12}
          rowGap={!isLargerThan600 ? 12 : 0}
        >
          <GridListItem
            title="Testing"
            borderPosition={isLargerThan600 ? 'left' : 'top'}
          >
            Before delivery, we conduct extensive testing to ensure the system
            meets your expectations. This includes stress testing, user
            acceptance testing, and scenario simulations to make sure the
            automation works flawlessly in real-world conditions.
          </GridListItem>
          <GridListItem
            title="Infrastructure"
            borderPosition={isLargerThan600 ? 'left' : 'top'}
          >
            We exclusively use AWS (Amazon Web Services) to host and manage your
            automation infrastructure. AWS provides a secure, scalable, and
            reliable environment for your solution, ensuring it can handle
            current needs while growing with your business. Our team optimizes
            AWS resources to ensure high performance, cost efficiency, and
            seamless integration with your existing systems.
          </GridListItem>
          <GridListItem
            title="Support"
            borderPosition={isLargerThan600 ? 'left' : 'top'}
          >
            Our involvement doesn’t end at delivery. We provide ongoing support
            to ensure the automation system continues to operate smoothly.
            Whether it's troubleshooting, system updates, or additional
            training, we’re here to make sure your business thrives with its new
            automated processes.
          </GridListItem>
        </GridList>
      </Container>
    </>
  );
}

function Values() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      bg={'#fafafa'}
      position="relative"
      mt={{ base: 24, sm: 32, lg: 40 }}
      py={{ base: 24, sm: 32, lg: 40 }}
    >
      <SectionIntro
        eyebrow="Our values"
        title="Core Values That Drive Our Success"
      >
        <Text sx={{ color: 'gray' }}>
          At the heart of everything we do are the values that shape our
          approach to automation, collaboration, and innovation. These
          principles guide how we work with clients, build solutions, and
          continuously push the boundaries of what's possible.
        </Text>
      </SectionIntro>

      <Container sx={{ mt: 24 }}>
        <GridList
          templateColumns={isLargerThan600 ? 'repeat(3, 1fr)' : '1fr'}
          templateRows="repeat(2, 1fr)"
          columnGap={12}
          rowGap={12}
        >
          <GridListItem title="Meticulous" borderPosition={'left'}>
            We pride ourselves on attention to detail, ensuring every aspect of
            your solution is carefully crafted to meet your specific needs.
            Nothing is overlooked, and everything is optimized for success.
          </GridListItem>
          <GridListItem title="Efficient" borderPosition={'left'}>
            Efficiency is at the core of automation—and it’s at the core of our
            work. From streamlined processes to optimized solutions, we focus on
            delivering value with speed and precision.
          </GridListItem>
          <GridListItem title="Adaptable" borderPosition={'left'}>
            No two businesses are the same. We adapt to meet the specific needs
            of each client, ensuring our solutions fit seamlessly into your
            workflows, no matter how complex or unique they may be.
          </GridListItem>
          <GridListItem title="Transparent" borderPosition={'left'}>
            We believe in clear, open communication. Every step of the way,
            you’ll have insight into our process, ensuring there are no
            surprises—only results that align with your vision.
          </GridListItem>
          <GridListItem title="Reliable" borderPosition={'left'}>
            Trust is essential in automation. You can count on us to deliver
            solutions that work seamlessly, reliably, and consistently. We build
            systems that you and your business can depend on.
          </GridListItem>
          <GridListItem title="Innovative" borderPosition={'left'}>
            We are constantly exploring new technologies and ideas. Our
            commitment to innovation means we bring forward-thinking solutions
            that keep your business ahead of the curve.
          </GridListItem>
        </GridList>
      </Container>
    </Box>
  );
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <Text sx={{ color: 'gray' }}>
          Our process is designed to maximize efficiency at every step, from
          understanding your unique challenges to delivering automated solutions
          that drive results. With a focus on collaboration, transparency, and
          innovation, we ensure every project is completed seamlessly and
          tailored to your needs.
        </Text>
      </PageIntro>

      <Box>
        <Discover />
        <Build />
        <Deliver />
      </Box>

      <Values />

      <ContactSection />
    </>
  );
}
